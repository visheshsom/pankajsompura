// import React, { useEffect, useRef, useState } from 'react';

// const TempleDotAnimation = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [templePoints, setTemplePoints] = useState([]);
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationRef = useRef(null);

//   // Path to JSON coordinates file
//   const JSON_URL = '/src/components/HomeFour/coordinator.json';

//   // Load and process coordinates
//   useEffect(() => {
//     const loadCoordinates = async () => {
//       try {
//         const response = await fetch(JSON_URL);
//         const { originalWidth, originalHeight, points } = await response.json();
//         const container = containerRef.current;

//         if (!container) return;

//         // Get container dimensions
//         const containerWidth = container.offsetWidth;
//         const containerHeight = container.offsetHeight;

//         // Calculate scale ratio while maintaining aspect ratio
//         const widthRatio = containerWidth / originalWidth;
//         const heightRatio = containerHeight / originalHeight;
//         const scale = Math.min(widthRatio, heightRatio) * 0.9;

//         // Calculate offsets for centering
//         const offsetX = (containerWidth - originalWidth * scale) / 2;
//         const offsetY = (containerHeight - originalHeight * scale) / 2;

//         // Transform coordinates to container space
//         const transformedPoints = points.map(([x, y]) => ({
//           x: x * scale + offsetX,
//           y: y * scale + offsetY
//         }));

//         setTemplePoints(transformedPoints);
//       } catch (error) {
//         console.error('Error loading coordinates:', error);
//       }
//     };

//     loadCoordinates();
//   }, []);

//   // Animation setup
//   useEffect(() => {
//     if (!templePoints.length) return;

//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     if (!canvas || !container) return;

//     const ctx = canvas.getContext('2d');
    
//     // Set canvas size to match container exactly
//     const setCanvasSize = () => {
//       canvas.width = container.offsetWidth;
//       canvas.height = container.offsetHeight;
//     };
//     setCanvasSize();

//     // Particle class
//     class Particle {
//       constructor(targetX, targetY) {
//         this.targetX = targetX;
//         this.targetY = targetY;
//         this.resetPosition();
//         this.size = Math.random() * 2 + 1;
//         this.vx = 0;
//         this.vy = 0;
//         this.acceleration = 0.15;
//         this.friction = 0.88;
//       }

//       resetPosition() {
//         // Start particles at random positions within container
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//       }

//       update() {
//         if (isHovered) {
//           // Move towards target position
//           const dx = this.targetX - this.x;
//           const dy = this.targetY - this.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance > 0.5) {
//             this.vx += (dx / distance) * this.acceleration;
//             this.vy += (dy / distance) * this.acceleration;
//           }
//         } else {
//           // Random movement within container
//           this.vx += (Math.random() - 0.5) * 0.1;
//           this.vy += (Math.random() - 0.5) * 0.1;
//         }

//         // Apply friction
//         this.vx *= this.friction;
//         this.vy *= this.friction;

//         // Update position
//         this.x += this.vx;
//         this.y += this.vy;

//         // Strict container bounds
//         this.x = Math.max(0, Math.min(canvas.width, this.x));
//         this.y = Math.max(0, Math.min(canvas.height, this.y));
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = isHovered ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
//         ctx.fill();
//       }
//     }

//     // Create particles
//     const particles = templePoints.map(point => new Particle(point.x, point.y));
//     particlesRef.current = particles;

//     // Animation loop
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach(particle => {
//         particle.update();
//         particle.draw();
//       });

//       animationRef.current = requestAnimationFrame(animate);
//     };
//     animate();

//     return () => cancelAnimationFrame(animationRef.current);
//   }, [isHovered, templePoints]);

//   return (
//     <div 
//       ref={containerRef}
//       className="temple-animation-container relative w-full h-[600px] bg-white"
//       style={{ position: 'relative', overflow: 'hidden' }}
//     >
//       <canvas
//         ref={canvasRef}
//         className="absolute top-0 left-0 w-full h-full"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       />
//     </div>
//   );
// };

// export default TempleDotAnimation;
import React, { useEffect, useRef, useState } from 'react';

const TempleDotAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [templePoints, setTemplePoints] = useState([]);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  // Path to JSON coordinates file
  const JSON_URL = '/src/components/HomeFour/coordinator.json';

  // Load and process coordinates
  useEffect(() => {
    const loadCoordinates = async () => {
      try {
        const response = await fetch(JSON_URL);
        const { originalWidth, originalHeight, points } = await response.json();
        const container = containerRef.current;

        if (!container) return;

        // Get container dimensions
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        // Calculate scale ratio to fill container
        const widthRatio = containerWidth / originalWidth;
        const heightRatio = containerHeight / originalHeight;
        const scale = Math.max(widthRatio, heightRatio);

        // Calculate offsets for centering
        const offsetX = (containerWidth - originalWidth * scale) / 2;
        const offsetY = (containerHeight - originalHeight * scale) / 2;

        // Transform coordinates to container space
        const transformedPoints = points.map(([x, y]) => ({
          x: x * scale + offsetX,
          y: y * scale + offsetY
        }));

        setTemplePoints(transformedPoints);
      } catch (error) {
        console.error('Error loading coordinates:', error);
      }
    };

    loadCoordinates();
    window.addEventListener('resize', loadCoordinates);
    return () => window.removeEventListener('resize', loadCoordinates);
  }, []);

  // Animation setup
  useEffect(() => {
    if (!templePoints.length) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size to match container exactly
    const setCanvasSize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    setCanvasSize();

    // Sharp color palette with full opacity
    const colors = ['#c39867', '#a77745', '#51310f'];
    
    // Particle class
    class Particle {
      constructor(targetX, targetY) {
        this.targetX = targetX;
        this.targetY = targetY;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.resetPosition();
        this.baseSize = 1.2; // Base size for sharpness
        this.size = this.baseSize;
        this.vx = 0;
        this.vy = 0;
        this.acceleration = 0.25; // Increased acceleration
        this.friction = 0.85; // Reduced friction
      }

      resetPosition() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
      }

      update() {
        if (isHovered) {
          // Faster movement calculations
          const dx = this.targetX - this.x;
          const dy = this.targetY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 2) { // Reduced distance threshold
            this.vx += (dx / distance) * this.acceleration;
            this.vy += (dy / distance) * this.acceleration;
          }
          
          // Snap to position when close
          if (distance < 2) {
            this.x = this.targetX;
            this.y = this.targetY;
          }
        } else {
          // Reduced random movement
          this.vx += (Math.random() - 0.5) * 0.05;
          this.vy += (Math.random() - 0.5) * 0.05;
        }

        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;

        // Strict bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.beginPath();
        // Draw sharp rectangles instead of circles
        const size = isHovered ? this.baseSize : 0.8;
        ctx.fillStyle = this.color;
        ctx.fillRect(
          Math.floor(this.x - size/2), // Align to pixel grid
          Math.floor(this.y - size/2),
          size,
          size
        );
      }
    }

    // Create particles
    const particles = templePoints.map(point => new Particle(point.x, point.y));
    particlesRef.current = particles;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw in two passes for better sharpness
      particles.forEach(particle => particle.update());
      particles.forEach(particle => particle.draw());

      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Improve canvas rendering quality
    ctx.imageSmoothingEnabled = false;
    animate();

    return () => cancelAnimationFrame(animationRef.current);
  }, [isHovered, templePoints]);

  return (
    <div 
      ref={containerRef}
      className="temple-animation-container relative w-full h-[700px] bg-white"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default TempleDotAnimation;