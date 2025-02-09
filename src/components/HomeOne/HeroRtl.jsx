import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BannerImage1 from '../../assets/images/banner/banner-image1.jpg';
import BannerImage2 from '../../assets/images/banner/banner-image2.jpg';
import BannerImage3 from '../../assets/images/banner/banner-image3.jpg';
import BannerShapeImage1 from '../../assets/images/shape/banner-one-shape.png';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: true,
    loop: true,
};

function HeroHomeOne({ className }) {
return (
<>
    <section className={`banner-area ${className || ''}`}>
        <div className="container">
            <div className="banner__image">

                <div className="swiper banner__slider">
                    <Swiper {...swiperOptions}
                    modules={[Navigation]}
                    navigation={{
                    prevEl: ".banner__arry-prev",
                    nextEl: ".banner__arry-next",
                    }}
                    className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="parallax-bg"> <img src={BannerImage1} alt="image" data-swiper-parallax="300"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="parallax-bg"> <img src={BannerImage2} alt="image" data-swiper-parallax="300"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="parallax-bg"> <img src={BannerImage3} alt="image" data-swiper-parallax="300"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="banner__content animated-content">
                    <div className="shape">
                        <img src={BannerShapeImage1} alt="shape"/>
                    </div>
                    <h4 className="mb-2" data-animation="fadeInLeft" data-duration="1s" data-delay=".1s">A SPIRIT OF REVERENCE</h4>
                    <h1 data-animation="fadeInLeft" data-duration="1.5s" data-delay=".15s">Planning, Design, Consultancy, Renovation </h1>
                    <Link to="/page-about" className="btn-one mt-30" data-animation="fadeInLeft" data-duration="2s" data-delay=".2s">read more</Link>
                </div>

                <div className="banner__slider-arry rtl-style">
                    <button className="banner__arry-prev"><i className="fa-light fa-arrow-left-long"></i></button>
                    <button className="banner__arry-next"><i className="fa-light fa-arrow-right-long"></i></button>
                </div>
            </div>
        </div>
    </section>
</>
);
}

export default HeroHomeOne;
