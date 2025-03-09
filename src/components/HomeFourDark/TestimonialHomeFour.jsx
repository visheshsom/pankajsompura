import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import TestimoniaShape1 from '../../assets/images/shape/testimonial-four-shape.png';
import Testimonialimage1 from '../../assets/images/testimonial/testimonial-four-image1.png';
import Testimonialimage2 from '../../assets/images/testimonial/testimonial-four-image2.png';
import Testimonialimage3 from '../../assets/images/testimonial/testimonial-four-image3.png';


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 1,
        },
        1350: {
            slidesPerView: 1,
        },
    }
};

function TestimonialHomeFour({ className }) {
return (
<>
        <section className={`testimonial-four-area pt-120 ${className || ""}`}>
            <div className="testimonial-four__shape">
                <img className="wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms"
                    src={TestimoniaShape1} alt="shape"/>
            </div>
            <div className="container">
                <div className="testimonial-four__wrp">
                    <div className="row g-4">
                        <div className="col-lg-5">
                            <div className="section-header">
                                <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">TESTIMONIALS
                                </h4>
                                <h2 className="wow splt-txt" data-splitting>What People Say?</h2>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="testimonial-four__item">
                                <div className="quote">
                                    <svg width="162" height="131" viewBox="0 0 162 131" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_594)">
                                            <path opacity="0.322"
                                                d="M61.7332 69.454V130.684H0.316406V87.4639C0.316406 70.6554 3.12641 55.2479 8.74641 41.2411C14.3664 27.2344 23.7995 13.6273 37.0458 0.419922L59.9265 18.4285C44.271 35.6375 35.4398 52.646 33.4331 69.454H61.7332ZM161.686 69.454V130.684H100.269V87.4639C100.269 70.6554 103.079 55.2479 108.699 41.2411C114.319 27.2344 123.752 13.6273 136.999 0.419922L159.879 18.4285C144.226 35.6375 135.395 52.646 133.386 69.454H161.686Z"
                                                stroke="#6A6A6A" />
                                        </g>
                                        <defs>
                                            <clipPath>
                                                <rect width="162" height="131" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                <div className="swiper testimonial-four__slider">
                                    <Swiper {...swiperOptions}
                                        modules={[Navigation]}
                                        navigation={{
                                        prevEl: ".arry-prev.testimonial-four__arry-prev",
                                        nextEl: ".arry-next.testimonial-four__arry-next",
                                        }} 
                                        className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <p>I've been hiring in this field for years, and I've never encountered such
                                                a high
                                                level of professionalism. It truly
                                                feels like you're working with a team
                                                that can deliver results.</p>
                                            <div className="d-flex align-items-center gap-3 ">
                                                <img src={Testimonialimage1}
                                                    alt="image"/>
                                                <div>
                                                    <h4>Leslie Alexander</h4>
                                                    <h6 className="primary-color">Founder & CEO</h6>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <p>I've been hiring in this field for years, and I've never encountered such
                                                a high
                                                level of professionalism. It truly
                                                feels like you're working with a team
                                                that can deliver results.</p>
                                            <div className="d-flex align-items-center gap-3 ">
                                                <img src={Testimonialimage2}
                                                    alt="image"/>
                                                <div>
                                                    <h4>Harleen Quinzel</h4>
                                                    <h6 className="primary-color">UX/UI Designer</h6>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <p>I've been hiring in this field for years, and I've never encountered such
                                                a high
                                                level of professionalism. It truly
                                                feels like you're working with a team
                                                that can deliver results.</p>
                                            <div className="d-flex align-items-center gap-3 ">
                                                <img src={Testimonialimage3}
                                                    alt="image"/>
                                                <div>
                                                    <h4>Jenny Wilson</h4>
                                                    <h6 className="primary-color">Web Developer</h6>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>

                                <div className="testimonial-four__arry-wrp d-flex align-items-center gap-3">
                                    <button className="arry-prev testimonial-four__arry-prev"><i
                                        className="fa-light fa-arrow-left"></i></button>
                                    <button className="arry-next testimonial-four__arry-next"><i
                                        className="fa-light fa-arrow-right"></i></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
</>
);
}

export default TestimonialHomeFour;