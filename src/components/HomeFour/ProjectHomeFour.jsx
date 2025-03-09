import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import '../../assets/css/protection.css';
import TempleProgressiveLoading from './TPA';

// Define secure image URLs
const BACKEND_URL = 'http://localhost:5001';
const secureImages = {
    projectImage1: `${BACKEND_URL}/api/images/samet_temple.png`,
    projectImageg1: `${BACKEND_URL}/api/images/sammed_main_mandir.png`,
    projectImage2: `${BACKEND_URL}/api/images/06.jpg`,
    projectImage3: `${BACKEND_URL}/api/images/c6.jpg`,
    projectImage4: `${BACKEND_URL}/api/images/ms_bhuvan.png`,
};

// CSS to prevent image interactions
const secureImageStyle = {
    pointerEvents: 'none',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    WebkitTouchCallout: 'none',
    draggable: false,
    WebkitUserDrag: 'none',
    KhtmlUserDrag: 'none',
    MozUserDrag: 'none',
    OUserDrag: 'none',
};

// CSS for the container to prevent right-click
const secureContainerStyle = {
    position: 'relative',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
};

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    }
};

function ProjectHomeFour({ className }) {
    const canvasRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Add protection to images after they load
        const images = document.querySelectorAll('.protected-image');
        const containers = document.querySelectorAll('.protected-container');

        const preventActions = (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };

        // Add multiple event listeners to both images and their containers
        [...images, ...containers].forEach(element => {
            element.addEventListener('contextmenu', preventActions, true);
            element.addEventListener('dragstart', preventActions, true);
            element.addEventListener('mousedown', preventActions, true);
            element.addEventListener('touchstart', preventActions, true);
            element.addEventListener('copy', preventActions, true);
            element.addEventListener('cut', preventActions, true);
            element.addEventListener('paste', preventActions, true);
            element.addEventListener('selectstart', preventActions, true);
        });

        // Global right-click prevention for protected areas
        const handleGlobalRightClick = (e) => {
            if (e.target.closest('.protected-container')) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        };

        document.addEventListener('contextmenu', handleGlobalRightClick, true);

        return () => {
            [...images, ...containers].forEach(element => {
                element.removeEventListener('contextmenu', preventActions, true);
                element.removeEventListener('dragstart', preventActions, true);
                element.removeEventListener('mousedown', preventActions, true);
                element.removeEventListener('touchstart', preventActions, true);
                element.removeEventListener('copy', preventActions, true);
                element.removeEventListener('cut', preventActions, true);
                element.removeEventListener('paste', preventActions, true);
                element.removeEventListener('selectstart', preventActions, true);
            });
            document.removeEventListener('contextmenu', handleGlobalRightClick, true);
        };
    }, []);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const ctx = canvas.getContext('2d');
      let animationFrameId;
  
      // Set canvas dimensions
      const setCanvasSize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };
      setCanvasSize();
      window.addEventListener('resize', setCanvasSize);
  
      // Particle class
      class Particle {
        constructor() {
          this.reset(true);
        }
  
        reset(initial) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          if (!initial) {
            this.targetX = this.x;
            this.targetY = this.y;
          }
          this.vx = 0;
          this.vy = 0;
        }
  
        update(targets) {
          if (isHovered && targets) {
            const dx = this.targetX - this.x;
            const dy = this.targetY - this.y;
            this.vx += dx * 0.02;
            this.vy += dy * 0.02;
          } else {
            this.vx += (Math.random() - 0.5) * 0.1;
            this.vy += (Math.random() - 0.5) * 0.1;
          }
  
          this.vx *= 0.95;
          this.vy *= 0.95;
          this.x += this.vx;
          this.y += this.vy;
  
          // Keep within bounds
          if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
          if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
  
        draw() {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.beginPath();
          ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
  
      // Create particles
      const particles = Array.from({ length: 800 }, () => new Particle());
  
      // Load temple image for target positions
      const img = new Image();
      img.src = secureImages.projectImage1;
      let targets = [];
  
      img.onload = () => {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = img.width;
        tempCanvas.height = img.height;
        tempCtx.drawImage(img, 0, 0);
  
        const imageData = tempCtx.getImageData(0, 0, img.width, img.height);
        const data = imageData.data;
  
        // Collect target positions from image
        for (let y = 0; y < img.height; y += 4) {
          for (let x = 0; x < img.width; x += 4) {
            if (data[(y * img.width + x) * 4 + 3] > 128) {
              targets.push({
                x: (x / img.width) * canvas.width,
                y: (y / img.height) * canvas.height
              });
            }
          }
        }
  
        // Assign targets to particles
        particles.forEach((particle, i) => {
          if (targets[i % targets.length]) {
            particle.targetX = targets[i % targets.length].x;
            particle.targetY = targets[i % targets.length].y;
          }
        });
      };
  
      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
          particle.update(targets);
          particle.draw();
        });
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();
  
      return () => {
        window.removeEventListener('resize', setCanvasSize);
        cancelAnimationFrame(animationFrameId);
      };
    }, [isHovered]);    

    return (
        <>
            <section className={`project-four-area ${className || ''}`}>
                <div className="container">
                    <div className="feature-four__wrp">
                        <div className="section-header__flex mb-50">
                            <div>
                                <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Our Projects</h4>
                                <h2 className="wow splt-txt" data-splitting>Crafting Divine Spaces, <br /> Preserving Timeless Legacies</h2>
                            </div>
                            <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">We bring decades of expertise in temple architecture and restoration, creating spiritually enriching and architecturally stunning spaces that honor tradition while embracing innovation.</p>
                        </div>
                    </div>
                </div>
                <div 
                    className="project__wrp project-four__wrp" 
                    style={{ 
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <TempleProgressiveLoading />
                </div>

                <div className="project__wrp">
                    <div className="swiper project__slider"> 
                        <Swiper {...swiperOptions}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".project__arry-prev",
                                nextEl: ".project__arry-next",
                            }}
                            className="swiper-wrapper"
                        >
                            <SwiperSlide className="swiper-slide">
                                <div className="project__item protected-container" style={{ 
                                    ...secureContainerStyle,
                                    backgroundImage: `url(${secureImages.projectImageg1})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                    <div className="project-four__content">
                                        <h2>01</h2>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Shri Sammet Shikhar, Madhuban</Link></h4>
                                            <Link to="/page-project-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="project__item protected-container" style={{ 
                                    ...secureContainerStyle,
                                    backgroundImage: `url(${secureImages.projectImage2})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                    <div className="project-four__content">
                                        <h2>02</h2>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Shri Namiun Tirth, MP</Link></h4>
                                            <Link to="/page-project-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="project__item protected-container" style={{ 
                                    ...secureContainerStyle,
                                    backgroundImage: `url(${secureImages.projectImage3})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                    <div className="project-four__content">
                                        <h2>03</h2>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Shree Samvasran Pattshala, Bangalore</Link></h4>
                                            <Link to="/page-project-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="project__item" style={{ backgroundImage: `url(${secureImages.projectImage4})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  backgroundRepeat: 'no-repeat'
                                  }}>
                                    <div className="project-four__content">
                                        <h2>04</h2>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Shri Maharashtra Bhuvan <br /> Mumbai</Link></h4>
                                            <Link to="/page-project-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="project__item" style={{ backgroundImage: `url(${secureImages.projectImage1})`}}>
                                    <div className="project-four__content">
                                        <h2>05</h2>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Temple</Link></h4>
                                            <Link to="/page-project-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="project__item" style={{ backgroundImage: `url(${secureImages.projectImage2})`}}>
                                    <div className="project-four__content">
                                        <h2>06</h2>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Temple</Link></h4>
                                            <Link to="/page-project-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="project__slider-arrys">
                        <button className="project__arry-prev">
                            <i className="fa-regular fa-arrow-left"></i>
                        </button>
                        <button className="project__arry-next">
                            <i className="fa-regular fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHomeFour; 