import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import Projectimage1 from '../../assets/images/bg/project-four-bg.jpg';
import Projectimage2 from '../../assets/images/bg/project-four-bg2.jpg';
import Projectimage3 from '../../assets/images/bg/project-four-bg3.jpg';
import Projectimage4 from '../../assets/images/bg/project-four-bg4.jpg';

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
return (
<>
        <section className={`project-four-area light-area ${className || ''}`}>
            <div className="container">
                <div className="feature-four__wrp">
                    <div className="section-header__flex mb-50">
                        <div>
                            <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Our Projects</h4>
                            <h2 className="wow splt-txt text-white" data-splitting>Check what we offer for <br /> your home</h2>
                        </div>
                        <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                </div>
            </div>
            <div className="project__wrp project-four__wrp" style={{ backgroundImage: `url(${Projectimage1})` }}>
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
                        <div className="project__item" style={{ backgroundImage: `url(${Projectimage1})`}}>
                            <div className="project-four__content">
                                <h2>01</h2>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Transforming Rooms</Link></h4>
                                    <Link to="/page-project-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="project__item" style={{ backgroundImage: `url(${Projectimage2})`}}>
                            <div className="project-four__content">
                                <h2>02</h2>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Initial computer Designs</Link></h4>
                                    <Link to="/page-project-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="project__item" style={{ backgroundImage: `url(${Projectimage3})`}}>
                            <div className="project-four__content">
                                <h2>03</h2>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Depth Design process</Link></h4>
                                    <Link to="/page-project-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="project__item" style={{ backgroundImage: `url(${Projectimage4})`}}>
                            <div className="project-four__content">
                                <h2>04</h2>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Assembly <br /> Home</Link></h4>
                                    <Link to="/page-project-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="project__item" style={{ backgroundImage: `url(${Projectimage1})`}}>
                            <div className="project-four__content">
                                <h2>05</h2>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Transforming Rooms</Link></h4>
                                    <Link to="/page-project-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="project__item" style={{ backgroundImage: `url(${Projectimage2})`}}>
                            <div className="project-four__content">
                                <h2>06</h2>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Initial computer Designs</Link></h4>
                                    <Link to="/page-project-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                                </div>
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

export default ProjectHomeFour;