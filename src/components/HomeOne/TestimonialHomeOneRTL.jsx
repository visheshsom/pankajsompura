import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import Testimonialimage1 from '../../assets/images/testimonial/tmnl_mh_pl1.png';
import Testimonialimage2 from '../../assets/images/bg/testimonial-item-bg.jpg';


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: false,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 2,
        },
    }
};

function ProjectHomeOne({ className }) {
    return (
        <>
        <section className={`testimonial-area ${className || ""}`}>
            <div className="testimonial__wrp">
                <div className="row g-0">
                    <div className="col-xl-6">
                        <div className="testimonial__image">
                        <figure className="wow imageUpToDown gsap__parallax">
                            <img
                            src={Testimonialimage1}
                            alt="testimonial"
                            />
                        </figure>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="testimonial__item" style={{ backgroundImage: `url(${Testimonialimage2})`}}>
                            <div className="icon rtl">
                                <svg
                                width="143"
                                height="109"
                                viewBox="0 0 143 109"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M53.625 0.875H13.4062C6.0136 0.875 0 6.8886 0 14.2812V54.5C0 61.8927 6.0136 67.9062 13.4062 67.9062H31.4449L24.661 102.803C24.4057 104.114 24.7505 105.469 25.5993 106.499C26.4481 107.529 27.7115 108.125 29.0469 108.125H43.5245C47.4107 108.125 50.8648 105.583 52.0409 101.902L65.05 71.044C65.1242 70.8672 65.1874 70.6861 65.2376 70.5029C66.429 66.2218 67.0312 61.7944 67.0312 57.3453V14.2812C67.0312 6.8886 61.0177 0.875 53.625 0.875Z"
                                    fill="black"
                                    fillOpacity="0.1"
                                />
                                <path
                                    d="M129.594 0.875H89.375C81.9823 0.875 75.9688 6.8886 75.9688 14.2812V54.5C75.9688 61.8927 81.9823 67.9062 89.375 67.9062H107.416L100.63 102.803C100.372 104.114 100.717 105.469 101.568 106.499C102.415 107.529 103.68 108.125 105.016 108.125H119.495C123.384 108.125 126.836 105.583 128.01 101.9L141.019 71.0439C141.093 70.8672 141.154 70.6861 141.206 70.5028C142.398 66.2174 143 61.7901 143 57.3453V14.2812C143 6.8886 136.986 0.875 129.594 0.875Z"
                                    fill="black"
                                    fillOpacity="0.1"
                                />
                                </svg>
                            </div>
                            <div className="section-header">
                                <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                TESTIMONIALS
                                </h4>
                                <h2 className="wow splt-txt" data-splitting>
                                Customer Feedback
                                </h2>
                            </div>
                            <Swiper {...swiperOptions}
                                modules={[Navigation]}
                                navigation={{
                                prevEl: ".testimonial__arry-prev",
                                nextEl: ".testimonial__arry-next",
                                }}
                                className="swiper testimonial__slider"
                            >
                                <SwiperSlide>
                                    <div className="testimonial__content">
                                        <p>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                        classical Latin literature from 45 BC, making it over 2000 years old.
                                        </p>
                                        <div className="testimonial__info mt-40">
                                        <div className="info">
                                            <h5 className="mb-1">Suborna Islam</h5>
                                            <span>Web Designer</span>
                                        </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial__content">
                                        <p>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                        classical Latin literature from 45 BC, making it over 2000 years old.
                                        </p>
                                        <div className="testimonial__info mt-40">
                                        <div className="info">
                                            <h5 className="mb-1">Kawser Ahmed</h5>
                                            <span>Web Developer</span>
                                        </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial__content">
                                        <p>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                        classical Latin literature from 45 BC, making it over 2000 years old.
                                        </p>
                                        <div className="testimonial__info mt-40">
                                        <div className="info">
                                            <h5 className="mb-1">Suborna Islam</h5>
                                            <span>Web Designer</span>
                                        </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial__content">
                                        <p>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                        classical Latin literature from 45 BC, making it over 2000 years old.
                                        </p>
                                        <div className="testimonial__info mt-40">
                                        <div className="info">
                                            <h5 className="mb-1">Kawser Ahmed</h5>
                                            <span>Web Developer</span>
                                        </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            {/*<div className="testimonial__arry">
                                <button className="testimonial__arry-prev">
                                <i className="fa-light fa-arrow-left-long"></i>
                                </button>
                                <button className="testimonial__arry-next">
                                <i className="fa-light fa-arrow-right-long"></i>
                                </button>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default ProjectHomeOne;