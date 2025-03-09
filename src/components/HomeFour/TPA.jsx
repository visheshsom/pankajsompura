// ########################################################################################################################################################################################################################################################################
import React, { useEffect, useRef, useState } from 'react';

const TempleProgressiveLoading = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const glRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    
    // High DPI setup
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    // Try to get WebGL2 context first
    let gl = canvas.getContext('webgl2', { 
      antialias: true,
      premultipliedAlpha: false,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: false
    });
    
    const isWebGL2 = !!gl;
    
    if (!gl) {
      gl = canvas.getContext('webgl', { 
        antialias: true,
        premultipliedAlpha: false
      });
      
      if (!gl) {
        console.error('WebGL not supported');
        return;
      }
    }
    
    glRef.current = gl;
    
    // Load binary data with progressive loading
    const loadBinaryData = async () => {
      try {
        // Create fetch with progress
        const response = await fetch('/coordinator.bin');
        
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        
        const contentLength = +response.headers.get('Content-Length');
        const reader = response.body.getReader();
        const chunks = [];
        let receivedLength = 0;
        
        // Read data chunks and update progress
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) {
            break;
          }
          
          chunks.push(value);
          receivedLength += value.length;
          
          // Update progress (0-100)
          if (contentLength) {
            setLoadingProgress(Math.round((receivedLength / contentLength) * 100));
          }
        }
        
        // Concatenate chunks into a single Uint8Array
        const chunksAll = new Uint8Array(receivedLength);
        let position = 0;
        for (const chunk of chunks) {
          chunksAll.set(chunk, position);
          position += chunk.length;
        }
        
        const buffer = chunksAll.buffer;
        
        // Read header (first 12 bytes)
        const headerView = new DataView(buffer, 0, 12);
        const width = headerView.getFloat32(0, true);  // little-endian
        const height = headerView.getFloat32(4, true);
        const coordCount = headerView.getUint32(8, true);
  
        // Validate size
        const expectedSize = 12 + (coordCount * 4);
        if (buffer.byteLength !== expectedSize) {
          throw new Error(`Invalid file size. Expected ${expectedSize}, got ${buffer.byteLength}`);
        }
  
        // Get points data
        const pointsData = new Float32Array(buffer, 12);
        const pointCount = coordCount / 2;
        
        // Start rendering immediately
        setupWebGLRenderer(gl, isWebGL2, pointsData, pointCount, width, height, rect);
        setReady(true);
      } catch (error) {
        console.error('Error loading binary data:', error);
        setLoadingProgress(100); // Show 100% even on error
        setReady(false);
      }
    };

    loadBinaryData();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // WebGL setup and rendering
  const setupWebGLRenderer = (gl, isWebGL2, pointsData, pointCount, originalWidth, originalHeight, rect) => {
    // Calculate scale to fit content
    const scale = Math.min(
      rect.width / originalWidth,
      rect.height / originalHeight
    );
    
    // Offset to center the image
    const offsetX = (rect.width - originalWidth * scale) / 2;
    const offsetY = (rect.height - originalHeight * scale) / 2;

    // Create shaders
    const vertexShaderSource = `
      precision highp float;
      
      attribute vec2 a_position;
      attribute vec2 a_target;
      attribute vec2 a_velocity;
      
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_hover;
      uniform float u_pointSize;
      
      void main() {
        vec2 zeroToOne = a_position / u_resolution;
        vec2 zeroToTwo = zeroToOne * 2.0;
        vec2 clipSpace = zeroToTwo - 1.0;
        
        gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
        gl_PointSize = u_pointSize;
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      
      uniform vec4 u_color;
      
      void main() {
        float dist = distance(gl_PointCoord, vec2(0.5, 0.5));
        if (dist > 0.5) {
          discard;
        }
        gl_FragColor = u_color;
      }
    `;

    // Create shader program
    const createShader = (gl, type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    };

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }

    // Get attribute locations
    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    const targetAttributeLocation = gl.getAttribLocation(program, 'a_target');
    const velocityAttributeLocation = gl.getAttribLocation(program, 'a_velocity');
    
    // Get uniform locations
    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
    const mouseUniformLocation = gl.getUniformLocation(program, 'u_mouse');
    const hoverUniformLocation = gl.getUniformLocation(program, 'u_hover');
    const pointSizeUniformLocation = gl.getUniformLocation(program, 'u_pointSize');
    const colorUniformLocation = gl.getUniformLocation(program, 'u_color');

    // Create buffers
    const positionBuffer = gl.createBuffer();
    const targetBuffer = gl.createBuffer();
    const velocityBuffer = gl.createBuffer();

    // Create arrays for position, target, velocity
    const positions = new Float32Array(pointCount * 2);
    const targets = new Float32Array(pointCount * 2);
    const velocities = new Float32Array(pointCount * 2);

    // Initialize particles
    for (let i = 0; i < pointCount; i++) {
      const targetX = pointsData[i * 2] * scale + offsetX;
      const targetY = pointsData[i * 2 + 1] * scale + offsetY;
      
      // Store target position
      targets[i * 2] = targetX;
      targets[i * 2 + 1] = targetY;
      
      // Start with random position for effect
      positions[i * 2] = Math.random() * rect.width;
      positions[i * 2 + 1] = Math.random() * rect.height;
      
      // Zero initial velocity
      velocities[i * 2] = 0;
      velocities[i * 2 + 1] = 0;
    }

    // Set up initial buffers
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.DYNAMIC_DRAW);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, targetBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, targets, gl.STATIC_DRAW);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, velocityBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, velocities, gl.DYNAMIC_DRAW);

    // Enable WebGL features
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    // Motion parameters
    const ease = 0.12;
    const baseSpeed = 0.15;
    const mouseRadius = 50;
    const friction = 0.95;
    const dpr = window.devicePixelRatio || 1;
    const pointSize = 1.4 * dpr;
    
    // Use a fixed time step for consistent movement
    const fps = 60;
    const frameTime = 1000 / fps;
    let lastFrameTime = 0;

    // Animation loop
    const render = (currentTime) => {
      // Calculate delta time
      const deltaTime = currentTime - lastFrameTime;
      
      // Only update if enough time has passed (for stable FPS)
      if (deltaTime >= frameTime) {
        lastFrameTime = currentTime - (deltaTime % frameTime);
        
        gl.clear(gl.COLOR_BUFFER_BIT);
        
        // Update particle positions
        for (let i = 0; i < pointCount; i++) {
          const idx = i * 2;
          const x = positions[idx];
          const y = positions[idx + 1];
          const targetX = targets[idx];
          const targetY = targets[idx + 1];
          
          // Calculate vector to target
          const dx = targetX - x;
          const dy = targetY - y;
          
          if (isHoveredRef.current) {
            // Mouse interaction
            velocities[idx] += dx * ease;
            velocities[idx + 1] += dy * ease;
            
            // Mouse repulsion
            const mouseX = mousePosRef.current.x;
            const mouseY = mousePosRef.current.y;
            const mouseDx = mouseX - x;
            const mouseDy = mouseY - y;
            const mouseDistSq = mouseDx * mouseDx + mouseDy * mouseDy;
            
            if (mouseDistSq < mouseRadius * mouseRadius) {
              const angle = Math.atan2(mouseDy, mouseDx);
              const force = Math.max((mouseRadius - Math.sqrt(mouseDistSq)) / mouseRadius, 0);
              velocities[idx] -= Math.cos(angle) * force * 2;
              velocities[idx + 1] -= Math.sin(angle) * force * 2;
            }
          } else {
            // Slight randomness in movement
            velocities[idx] += (dx * baseSpeed + (Math.random() - 0.5) * 0.5) * 0.1;
            velocities[idx + 1] += (dy * baseSpeed + (Math.random() - 0.5) * 0.5) * 0.1;
          }
          
          // Speed limiting
          const speedSq = velocities[idx] * velocities[idx] + velocities[idx + 1] * velocities[idx + 1];
          if (speedSq > 4) {
            const mult = 2 / Math.sqrt(speedSq);
            velocities[idx] *= mult;
            velocities[idx + 1] *= mult;
          }
          
          // Update position
          positions[idx] += velocities[idx];
          positions[idx + 1] += velocities[idx + 1];
          
          // Apply friction
          velocities[idx] *= friction;
          velocities[idx + 1] *= friction;
        }
        
        // Update position buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.DYNAMIC_DRAW);
        
        // Update velocity buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, velocityBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, velocities, gl.DYNAMIC_DRAW);
        
        // Set up for rendering
        gl.useProgram(program);
        
        // Bind position buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
        
        // Bind target buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, targetBuffer);
        gl.enableVertexAttribArray(targetAttributeLocation);
        gl.vertexAttribPointer(targetAttributeLocation, 2, gl.FLOAT, false, 0, 0);
        
        // Bind velocity buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, velocityBuffer);
        gl.enableVertexAttribArray(velocityAttributeLocation);
        gl.vertexAttribPointer(velocityAttributeLocation, 2, gl.FLOAT, false, 0, 0);
        
        // Set uniforms
        gl.uniform2f(resolutionUniformLocation, rect.width, rect.height);
        gl.uniform2f(mouseUniformLocation, mousePosRef.current.x, mousePosRef.current.y);
        gl.uniform1f(hoverUniformLocation, isHoveredRef.current ? 1.0 : 0.0);
        gl.uniform1f(pointSizeUniformLocation, pointSize);
        gl.uniform4f(colorUniformLocation, 0.655, 0.467, 0.271, 1.0); // #a77745
        
        // Draw points
        gl.drawArrays(gl.POINTS, 0, pointCount);
      }
      
      animationRef.current = requestAnimationFrame(render);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(render);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationRef.current);
      gl.deleteBuffer(positionBuffer);
      gl.deleteBuffer(targetBuffer);
      gl.deleteBuffer(velocityBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  };

  return (
    <div 
      ref={containerRef}
      className="temple-animation-container"
      style={{ 
        width: '100%', 
        height: '600px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'white'
      }}
    >
      {!ready && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#666'
        }}>
          <div style={{ fontSize: '18px', marginBottom: '10px' }}>
            Loading temple animation...
          </div>
          <div style={{ 
            width: '200px', 
            height: '10px', 
            backgroundColor: '#eee',
            borderRadius: '5px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${loadingProgress}%`,
              height: '100%',
              backgroundColor: '#a77745',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
          <div style={{ fontSize: '14px', marginTop: '5px' }}>
            {loadingProgress}%
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        onMouseEnter={() => isHoveredRef.current = true}
        onMouseLeave={() => isHoveredRef.current = false}
        onMouseMove={(e) => {
          const rect = canvasRef.current.getBoundingClientRect();
          mousePosRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          };
        }}
        style={{ 
          display: 'block', 
          width: '100%', 
          height: '100%',
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}
      />
    </div>
  );
};

export default TempleProgressiveLoading;