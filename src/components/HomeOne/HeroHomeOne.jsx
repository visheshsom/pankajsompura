import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Define secure image URLs
const BACKEND_URL = 'http://localhost:5001';
const secureImages = {
    banner1: `${BACKEND_URL}/api/images/c3.jpg`,
    banner2: `${BACKEND_URL}/api/images/c4.jpg`,
    banner3: `${BACKEND_URL}/api/images/c5.jpg`,
};

// CSS to prevent image interactions
const secureImageStyle = {
    pointerEvents: 'none',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
};

function HeroHomeOne({ className }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Prevent right-click on the entire section
    const handleContextMenu = (e) => {
        e.preventDefault();
        return false;
    };

    // Prevent drag and drop
    const handleDragStart = (e) => {
        e.preventDefault();
        return false;
    };

    useEffect(() => {
        // Add protection to images after they load
        const images = document.querySelectorAll('.banner__image img');
        images.forEach(img => {
            img.addEventListener('dragstart', handleDragStart);
            img.addEventListener('contextmenu', handleContextMenu);
        });

        return () => {
            // Cleanup listeners
            images.forEach(img => {
                img.removeEventListener('dragstart', handleDragStart);
                img.removeEventListener('contextmenu', handleContextMenu);
            });
        };
    }, []);

    return (
        <>
            <section 
                className={`banner-area ${className || ''}`}
                onContextMenu={handleContextMenu}
            >
                <div className="container">
                    <div className="banner__image">
                        {/* Custom Navigation Buttons */}
                        <button ref={prevRef} className="banner__arry-prev">❮</button>
                        <button ref={nextRef} className="banner__arry-next">❯</button>

                        {/* Swiper Container */}
                        <div className="banner__slider">
                            <Swiper
                                modules={[Autoplay, Navigation]}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                            >
                                {/* SwiperSlides */}
                                <SwiperSlide>
                                    <div className="parallax-bg">
                                        <img 
                                            src={secureImages.banner1} 
                                            alt="Banner 1" 
                                            style={secureImageStyle}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="parallax-bg">
                                        <img 
                                            src={secureImages.banner2} 
                                            alt="Banner 2" 
                                            style={secureImageStyle}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="parallax-bg">
                                        <img 
                                            src={secureImages.banner3} 
                                            alt="Banner 3" 
                                            style={secureImageStyle}
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroHomeOne;