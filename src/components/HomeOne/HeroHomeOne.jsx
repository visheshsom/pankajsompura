import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BannerImage1 from '../../assets/images/banner/c3.jpg';
import BannerImage2 from '../../assets/images/banner/c4.jpg';
import BannerImage3 from '../../assets/images/banner/c5.jpg';

function HeroHomeOne({ className }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <section className={`banner-area ${className || ''}`}>
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
                                        <img src={BannerImage1} alt="Banner 1" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="parallax-bg">
                                        <img src={BannerImage2} alt="Banner 2" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="parallax-bg">
                                        <img src={BannerImage3} alt="Banner 3" />
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