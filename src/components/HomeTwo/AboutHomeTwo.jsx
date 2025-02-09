import React from 'react';
import CounterUp3 from '../../lib/CounterUp3.jsx'; 
import CounterUp2 from '../../lib/CounterUp2.jsx'; 
import AboutShapeimage1 from '../../assets/images/shape/about-two-shape.png';
import AboutIconimage1 from '../../assets/images/icon/five-start-icon.png';
import Aboutimage1 from '../../assets/images/about/about-two-text.png';


function AboutHomeTwo({ className }) {
    const percentage1 = 50;
    const percentage2 = 60;
    const percentage3 = 20;
    return (
        <>
            <section className={`about-two-area pt-120 ${className || ""}`}>
                <div className="about-two__shape">
                    <img src={AboutShapeimage1} alt="image"/>
                </div>
                <div className="container">
                    <div className="about-two__wrp">
                        <div className="row align-items-start justify-content-between">
                            <div className="col-lg-4">
                                <div className="section-header">
                                    <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">ABOUT US </h4>
                                    <h2 className="wow splt-txt text-black" data-splitting>Bringing Elegance Interior Design</h2>
                                    <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">To explore and go after new ways to build, we’ve gathered the people, innovations, & partnerships that can anticipate & overcome new challenges. </p>
                                </div>
                                <div className="about-two__info d-flex align-items-center gap-3 mt-40">
                                    <h2>4.20</h2>
                                    <div className="text-center">
                                        <img src={AboutIconimage1} alt="icon"/>
                                        <h6 className="fw-600">2,500 Rating</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="about-two__content">
                                    <ul>
                                        <li>
                                            <h2><CounterUp2 count={percentage1} time={3} /></h2>
                                            <span>Employee Owned</span>
                                        </li>
                                        <li>
                                            <h2><CounterUp3 count={percentage2} time={3} /></h2>
                                            <span>Project in various industries</span>
                                        </li>
                                        <li>
                                            <h2><CounterUp3 count={percentage3} time={3} /></h2>
                                            <span>With nearly 24 years in business</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="about-two__text">
                            <img src={Aboutimage1} alt="image"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHomeTwo;
