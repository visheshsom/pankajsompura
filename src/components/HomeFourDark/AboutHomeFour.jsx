import React from 'react';
import { Link } from 'react-router-dom';
import Aboutimage1 from '../../assets/images/about/about-four-image.jpg';


function AboutHomeFour({ className }) {
    return (
        <>
            <section className={`about-four-area pb-40 ${className || ""}`}>
                <div className="about-four__text">
                    <h2>Interior</h2>
                </div>
                <div className="container-fluid p-0">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-four__image image">
                                <figure className="gsap__parallax">
                                    <img src={Aboutimage1} alt="image"/>
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-four__content">
                                <h2 className="wow splt-txt" data-splitting>Expert Interior Design For Every Lifestyle</h2>
                                <p className="wow fadeInUp mt-40" data-wow-delay="00ms" data-wow-duration="1500ms">We are passionate about our work and the positive impact it has on our clients. With over 12 years of experience, we consistently deliver top-tier web solutions, offering an exceptional experience tailored to our clients' needs.</p>
                                <Link to="/page-about" className="btn-one mt-50 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">ABOUT US</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHomeFour;
