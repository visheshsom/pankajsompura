import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import smallLogo from '../../assets/images/logo/100.png';
import Projectimage1 from '../../assets/images/bg/Sammed_Shikhar_Sketch51.png';
import Projectimage2 from '../../assets/images/bg/project-one-bg2.jpg';
import Projectimage3 from '../../assets/images/bg/project-one-bg.jpg';
import Projectimage4 from '../../assets/images/bg/project-one-bg2.jpg';


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 0,
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

function ProjectHomeOne({ className }) {
return (
<>
        <section className={`project-area sub-bg ${className}`}>
            <div className="section-header__icon text-center mb-50">
                <div className="mb-10 wow bounceIn">
                    <img src={smallLogo} alt="image"/>
                </div>
                <h2 className="wow splt-txt" data-splitting>Our Prominent Project</h2>
            </div>
            <div className="project__wrp" style={{ backgroundImage: `url(${Projectimage1})` }}>
                <div className="project__slider-arrys">
                    <button className="project__arry-prev"><i className="fa-regular fa-arrow-left"></i></button>
                    <button className="project__arry-next"><i className="fa-regular fa-arrow-right"></i></button>
                </div>
                <div className="swiper project__slider">
                <Swiper {...swiperOptions}
                modules={[Navigation]}
                navigation={{
                prevEl: ".project__arry-prev",
                nextEl: ".project__arry-next",
                }}
                className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                        <div className="project__item" data-bg={Projectimage1}>
                            <div className="project__content">
                                <h6 className="wow splt-txt" data-splitting>Bedroom</h6>
                                <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">The Fox House</Link></h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="project__item" data-bg={Projectimage2}>
                            <div className="project__content">
                                <h6 className="wow splt-txt" data-splitting>Furniture</h6>
                                <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Minimalism</Link></h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="project__item" data-bg={Projectimage3}>
                            <div className="project__content">
                                <h6 className="wow splt-txt" data-splitting >Interior</h6>
                                <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">House Lighting</Link></h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="project__item" data-bg={Projectimage4}>
                            <div className="project__content">
                                <h6 className="wow splt-txt" data-splitting>Bedroom</h6>
                                <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">The Fox House</Link></h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="project__item" data-bg={Projectimage1}>
                            <div className="project__content">
                                <h6 className="wow splt-txt" data-splitting>Bedroom</h6>
                                <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">The Fox House</Link></h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="project__item" data-bg={Projectimage2}>
                            <div className="project__content">
                                <h6 className="wow splt-txt" data-splitting>Furniture</h6>
                                <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Minimalism</Link></h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="project__item" data-bg={Projectimage3}>
                            <div className="project__content">
                                <h6 className="wow splt-txt" data-splitting>Interior</h6>
                                <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">House Lighting</Link></h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="project__item" data-bg={Projectimage4}>
                            <div className="project__content">
                                <h6 className="wow splt-txt" data-splitting>Bedroom</h6>
                                <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">The Fox House</Link></h4>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            </div>
        </section>
</>
);
}

export default ProjectHomeOne;