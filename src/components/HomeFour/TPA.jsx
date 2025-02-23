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

//   // Load coordinates ensuring high dot density
//   useEffect(() => {
//     const loadCoordinates = async () => {
//       try {
//         const response = await fetch('/coordinator.json');
//         const { originalWidth, originalHeight, points } = await response.json();
//         const container = containerRef.current;
        
//         if (!container) return;

//         const containerWidth = container.offsetWidth;
//         const containerHeight = container.offsetHeight;
//         const scale = Math.min(
//           containerWidth / originalWidth,
//           containerHeight / originalHeight
//         );

//         // Transform and deduplicate points
//         const transformedPoints = [];
//         const minDistance = 2; // Minimum distance between points to increase density
//         points.forEach(([x, y]) => { // Using all points
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
//         this.size = 0.9; // Smaller dot size for intricacy
//         this.ease = 0.1;
//       }

//       update() {
//         if (isHoveredRef.current) {
//           // Move towards temple position
//           const dx = this.templeX - this.x;
//           const dy = this.templeY - this.y;
//           this.vx = dx * this.ease;
//           this.vy = dy * this.ease;

//           // Mouse interaction
//           const mouseX = mousePosRef.current.x;
//           const mouseY = mousePosRef.current.y;
//           const mouseDx = mouseX - this.x;
//           const mouseDy = mouseY - this.y;
//           const mouseDist = Math.sqrt(mouseDx ** 2 + mouseDy ** 2);
          
//           if (mouseDist < 80) { // Smaller interaction radius
//             const angle = Math.atan2(mouseDy, mouseDx);
//             const force = Math.max((80 - mouseDist) / 80, 0);
//             this.x -= Math.cos(angle) * force * 3;
//             this.y -= Math.sin(angle) * force * 3;
//           }
//         } else {
//           // Natural flow movement
//           this.vx += (Math.random() - 0.5) * 0.1;
//           this.vy += (Math.random() - 0.5) * 0.1;

//           // Speed limiting
//           const speed = Math.sqrt(this.vx ** 2 + this.vy ** 2);
//           const maxSpeed = 2;
//           if (speed > maxSpeed) {
//             this.vx = (this.vx / speed) * maxSpeed;
//             this.vy = (this.vy / speed) * maxSpeed;
//           }

//           // Boundary checks
//           if (this.x < 0 || this.x > rect.width) this.vx *= -0.9;
//           if (this.y < 0 || this.y > rect.height) this.vy *= -0.9;
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
//       ctx.fillStyle = '#D2B48C'; // Light brown color

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
  const [isHovered, setIsHovered] = useState(false);
  const [templePoints, setTemplePoints] = useState([]);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);

  // Update hover state ref
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  // Load coordinates with high density
  useEffect(() => {
    const loadCoordinates = async () => {
      try {
        const response = await fetch('/coordinator.json');
        const { originalWidth, originalHeight, points } = await response.json();
        const container = containerRef.current;
        
        if (!container) return;

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const scale = Math.min(
          containerWidth / originalWidth,
          containerHeight / originalHeight
        );

        // Increase dot density by reducing minDistance
        const transformedPoints = [];
        const minDistance = 0.1; // Closer dots for natural line effect
        points.forEach(([x, y]) => {
          const tx = x * scale + (containerWidth - originalWidth * scale) / 2;
          const ty = y * scale + (containerHeight - originalHeight * scale) / 2;

          const isDuplicate = transformedPoints.some(p => 
            Math.abs(p.x - tx) < minDistance && 
            Math.abs(p.y - ty) < minDistance
          );

          if (!isDuplicate) {
            transformedPoints.push({ x: tx, y: ty });
          }
        });

        setTemplePoints(transformedPoints);
      } catch (error) {
        console.error('Error loading coordinates:', error);
      }
    };

    loadCoordinates();

    const handleResize = () => {
      const timeout = setTimeout(loadCoordinates, 100);
      return () => clearTimeout(timeout);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation setup
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
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = 0.5; // Smaller dots for a detailed formation
        this.ease = 0.12;
      }

      update() {
        if (isHoveredRef.current) {
          // Move towards temple position
          const dx = this.templeX - this.x;
          const dy = this.templeY - this.y;
          this.vx = dx * this.ease;
          this.vy = dy * this.ease;

          // Mouse interaction effect
          const mouseX = mousePosRef.current.x;
          const mouseY = mousePosRef.current.y;
          const mouseDx = mouseX - this.x;
          const mouseDy = mouseY - this.y;
          const mouseDist = Math.sqrt(mouseDx ** 2 + mouseDy ** 2);
          
          if (mouseDist < 50) { // Smaller interaction radius
            const angle = Math.atan2(mouseDy, mouseDx);
            const force = Math.max((50 - mouseDist) / 50, 0);
            this.x -= Math.cos(angle) * force * 2;
            this.y -= Math.sin(angle) * force * 2;
          }
        } else {
          // Natural movement for smoother animation
          this.vx += (Math.random() - 0.5) * 0.05;
          this.vy += (Math.random() - 0.5) * 0.05;

          // Speed limiting
          const speed = Math.sqrt(this.vx ** 2 + this.vy ** 2);
          const maxSpeed = 1.5;
          if (speed > maxSpeed) {
            this.vx = (this.vx / speed) * maxSpeed;
            this.vy = (this.vy / speed) * maxSpeed;
          }
        }

        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    particlesRef.current = templePoints.map(p => new Particle(p.x, p.y));
    const particles = particlesRef.current;

    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = '#a77745'; // Light brown color

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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


