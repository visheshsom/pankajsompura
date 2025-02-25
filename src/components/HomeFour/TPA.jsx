// import React, { useEffect, useRef, useState } from 'react';

// const TempleDotAnimation = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [templePoints, setTemplePoints] = useState([]);
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef(null);
//   const mousePosRef = useRef({ x: 0, y: 0 });
//   const isHoveredRef = useRef(false);

//   // Update hover state ref
//   useEffect(() => {
//     isHoveredRef.current = isHovered;
//   }, [isHovered]);

//   // Load coordinates with high density
//   useEffect(() => {
//     const loadCoordinates = async () => {
//       try {
//         const response = await fetch('');
//         const { originalWidth, originalHeight, points } = await response.json();
//         const container = containerRef.current;
        
//         if (!container) return;

//         const containerWidth = container.offsetWidth;
//         const containerHeight = container.offsetHeight;
//         const scale = Math.min(
//           containerWidth / originalWidth,
//           containerHeight / originalHeight
//         );

//         // Increase dot density by reducing minDistance
//         const transformedPoints = [];
//         const minDistance = 0.1; // Closer dots for natural line effect
//         points.forEach(([x, y]) => {
//           const tx = x * scale + (containerWidth - originalWidth * scale) / 2;
//           const ty = y * scale + (containerHeight - originalHeight * scale) / 2;

//           const isDuplicate = transformedPoints.some(p => 
//             Math.abs(p.x - tx) < minDistance && 
//             Math.abs(p.y - ty) < minDistance
//           );

//           if (!isDuplicate) {
//             transformedPoints.push({ x: tx, y: ty });
//           }
//         });

//         setTemplePoints(transformedPoints);
//       } catch (error) {
//         console.error('Error loading coordinates:', error);
//       }
//     };

//     loadCoordinates();

//     const handleResize = () => {
//       const timeout = setTimeout(loadCoordinates, 100);
//       return () => clearTimeout(timeout);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Animation setup
//   useEffect(() => {
//     if (!templePoints.length) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const container = containerRef.current;
//     const rect = container.getBoundingClientRect();
    
//     // High DPI setup
//     const dpr = window.devicePixelRatio || 1;
//     canvas.width = rect.width * dpr;
//     canvas.height = rect.height * dpr;
//     canvas.style.width = rect.width + 'px';
//     canvas.style.height = rect.height + 'px';
//     ctx.scale(dpr, dpr);

//     class Particle {
//       constructor(templeX, templeY) {
//         this.templeX = templeX;
//         this.templeY = templeY;
//         this.x = Math.random() * rect.width;
//         this.y = Math.random() * rect.height;
//         this.vx = (Math.random() - 0.5) * 2;
//         this.vy = (Math.random() - 0.5) * 2;
//         this.size = 0.5; // Smaller dots for a detailed formation
//         this.ease = 0.12;
//       }

//       update() {
//         if (isHoveredRef.current) {
//           // Move towards temple position
//           const dx = this.templeX - this.x;
//           const dy = this.templeY - this.y;
//           this.vx = dx * this.ease;
//           this.vy = dy * this.ease;

//           // Mouse interaction effect
//           const mouseX = mousePosRef.current.x;
//           const mouseY = mousePosRef.current.y;
//           const mouseDx = mouseX - this.x;
//           const mouseDy = mouseY - this.y;
//           const mouseDist = Math.sqrt(mouseDx ** 2 + mouseDy ** 2);
          
//           if (mouseDist < 50) { // Smaller interaction radius
//             const angle = Math.atan2(mouseDy, mouseDx);
//             const force = Math.max((50 - mouseDist) / 50, 0);
//             this.x -= Math.cos(angle) * force * 2;
//             this.y -= Math.sin(angle) * force * 2;
//           }
//         } else {
//           // Natural movement for smoother animation
//           this.vx += (Math.random() - 0.5) * 0.05;
//           this.vy += (Math.random() - 0.5) * 0.05;

//           // Speed limiting
//           const speed = Math.sqrt(this.vx ** 2 + this.vy ** 2);
//           const maxSpeed = 1.5;
//           if (speed > maxSpeed) {
//             this.vx = (this.vx / speed) * maxSpeed;
//             this.vy = (this.vy / speed) * maxSpeed;
//           }
//         }

//         this.x += this.vx;
//         this.y += this.vy;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     particlesRef.current = templePoints.map(p => new Particle(p.x, p.y));
//     const particles = particlesRef.current;

//     const animate = () => {
//       ctx.clearRect(0, 0, rect.width, rect.height);
//       ctx.fillStyle = '#a77745'; // Light brown color

//       particles.forEach(particle => {
//         particle.update();
//         particle.draw();
//       });

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animate();
//     return () => cancelAnimationFrame(animationRef.current);
//   }, [templePoints]);

//   return (
//     <div 
//       ref={containerRef}
//       className="temple-animation-container"
//       style={{ 
//         width: '100%', 
//         height: '600px',
//         position: 'relative',
//         overflow: 'hidden',
//         backgroundColor: 'white'
//       }}
//     >
//       <canvas
//         ref={canvasRef}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onMouseMove={(e) => {
//           const rect = canvasRef.current.getBoundingClientRect();
//           mousePosRef.current = {
//             x: e.clientX - rect.left,
//             y: e.clientY - rect.top
//           };
//         }}
//       />
//     </div>
//   );
// };

// export default TempleDotAnimation;



import React, { useEffect, useRef, useState } from 'react';

const TempleDotAnimation = () => {
  const [originalData, setOriginalData] = useState({ points: [], originalWidth: 0, originalHeight: 0 });
  const [templePoints, setTemplePoints] = useState([]);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);
  const resizeObserverRef = useRef(null);

  // Load binary data
  useEffect(() => {
    const loadBinaryData = async () => {
      try {
        const response = await fetch('/coordinator.bin');
        const buffer = await response.arrayBuffer();
        
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
  
        // Convert coordinates to points
        const pointsData = new Float32Array(buffer, 12);
        const formattedPoints = [];
        for (let i = 0; i < coordCount; i += 2) {
          formattedPoints.push([pointsData[i], pointsData[i + 1]]);
        }
  
        setOriginalData({
          points: formattedPoints,
          originalWidth: width,
          originalHeight: height
        });
      } catch (error) {
        console.error('Error loading binary data:', error);
      }
    };
  
    loadBinaryData();
  }, []);

  // Process points and handle resize
  useEffect(() => {
    if (!originalData.points.length || !containerRef.current) return;

    const computePoints = () => {
      const container = containerRef.current;
      const { originalWidth, originalHeight, points } = originalData;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const scale = Math.min(
        containerWidth / originalWidth,
        containerHeight / originalHeight
      );

      const transformedPoints = [];
      const pointSet = new Set();
      const minDistance = 0.001;

      points.forEach(([x, y]) => {
        const tx = x * scale + (containerWidth - originalWidth * scale) / 2;
        const ty = y * scale + (containerHeight - originalHeight * scale) / 2;
        
        const gridX = Math.floor(tx / minDistance);
        const gridY = Math.floor(ty / minDistance);
        const key = `${gridX},${gridY}`;

        if (!pointSet.has(key)) {
          transformedPoints.push({ x: tx, y: ty });
          pointSet.add(key);
        }
      });

      setTemplePoints(transformedPoints);
    };

    computePoints();
    
    // Set up ResizeObserver
    resizeObserverRef.current = new ResizeObserver(computePoints);
    resizeObserverRef.current.observe(containerRef.current);

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [originalData]);

  // Animation system
  useEffect(() => {
    if (!templePoints.length) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    // High DPI setup
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);

    class Particle {
      constructor(templeX, templeY) {
        this.templeX = templeX;
        this.templeY = templeY;
        this.x = Math.random() * rect.width;
        this.y = Math.random() * rect.height;
        this.vx = 0;
        this.vy = 0;
        this.size = 0.7;
        this.ease = 0.12;
        this.baseSpeed = 0.15;
      }

      update(mouseX, mouseY) {
        const dx = this.templeX - this.x;
        const dy = this.templeY - this.y;
        
        if (isHoveredRef.current) {
          // Target movement with mouse interaction
          this.vx += dx * this.ease;
          this.vy += dy * this.ease;

          // Mouse avoidance
          const mouseDx = mouseX - this.x;
          const mouseDy = mouseY - this.y;
          const mouseDistSq = mouseDx ** 2 + mouseDy ** 2;
          
          if (mouseDistSq < 2500) { // 50px radius squared
            const angle = Math.atan2(mouseDy, mouseDx);
            const force = Math.max((50 - Math.sqrt(mouseDistSq)) / 50, 0);
            this.vx -= Math.cos(angle) * force * 2;
            this.vy -= Math.sin(angle) * force * 2;
          }
        } else {
          // Fluid base movement
          this.vx += (dx * this.baseSpeed + Math.random() - 0.5) * 0.1;
          this.vy += (dy * this.baseSpeed + Math.random() - 0.5) * 0.1;
        }

        // Speed limiting
        const speed = this.vx ** 2 + this.vy ** 2;
        if (speed > 4) {
          const mult = 2 / Math.sqrt(speed);
          this.vx *= mult;
          this.vy *= mult;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95;
        this.vy *= 0.95;
      }
    }

    // Initialize particles
    particlesRef.current = templePoints.map(p => new Particle(p.x, p.y));
    const particles = particlesRef.current;

    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = '#a77745';

      // Batch drawing
      ctx.beginPath();
      const mousePos = mousePosRef.current;
      particles.forEach(particle => {
        particle.update(mousePos.x, mousePos.y);
        ctx.moveTo(particle.x + particle.size, particle.y);
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      });
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationRef.current);
  }, [templePoints]);

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
      />
    </div>
  );
};

export default TempleDotAnimation;