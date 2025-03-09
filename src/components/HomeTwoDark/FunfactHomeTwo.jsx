import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import CounterUp from '../../lib/CounterUp.jsx'; 
import CounterUp2 from '../../lib/CounterUp2.jsx'; 
import ExperienceImage1 from '../../assets/images/bg/experience-bg.png';
import ProgressBar2 from '../../lib/ProgressBar2.jsx';

function FunfactHomeTwo({ className }) {
        const percentage1 = 170;
        const percentage2 = 80;
        const percentage3 = 70;
        const percentage4 = 55;
 
    return (
        <>
        <section className={`experience-area dark-bg pt-100 pb-120 ${className || ""}`}>
            <div className="experience__bg">
                <img src={ExperienceImage1} alt="Experience" />
            </div>
            <div className="container">
                <div className="experience__wrp">
                <div className="row g-0 align-items-center">
                    {/* Left Section */}
                    <div className="col-xl-7">
                    <div className="experience__item-left">
                        <div className="section-header mb-30">
                        <h2
                            className="wow splt-txt"
                            data-splitting="true"
                        >
                            Exceptional standard of customer satisfaction
                        </h2>
                        <p
                            className="wow fadeInUp"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                        >
                            AuraDeco offers full range of consultancy & training methods
                            for data analysis, business consultation.
                        </p>
                        </div>
                        {/* Progress Area */}
                        <div className="progress-area">
                            <div className="team-details__bottom-right home-style ms-0">
                                <div className="team-details__progress">
                                    <ProgressBar2 title="Expertise & Experience" targetPercentage={80} />
                                    <ProgressBar2 title="Innovative Solutions" targetPercentage={70} />
                                    <ProgressBar2 title="Cost Efficiency" targetPercentage={55} />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* Right Section */}
                    <div className="col-xl-5">
                    <div className="experience__item-right">
                        <div className="experience__item">
                        <h2 className="mb-10">
                            <CounterUp count={percentage1} time={3} />
                        </h2>
                        <h3 className="wow splt-txt" data-splitting="true">
                            Customers are served by the Interior Design department
                        </h3>
                        <p
                            className="mt-20 wow fadeInUp"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms"
                        >
                            Lorem ipsum dolor sit amet consectetur adipiscing elit
                            dictumst porta nulla nunc accumsan.
                        </p>
                        <Link
                            to="/page-about"
                            className="btn-one light-area mt-40 wow fadeInUp"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                        >
                            View More <i className="fa-light fa-arrow-up-right"></i>
                        </Link>
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

export default FunfactHomeTwo;
