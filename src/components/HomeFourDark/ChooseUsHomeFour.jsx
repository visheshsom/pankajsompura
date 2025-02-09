import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import CounterUp from '../../lib/CounterUp.jsx'; 
import FunfactImage1 from '../../assets/images/shape/funfact-four-text.png';
import FunfactImage2 from '../../assets/images/shape/funfact-four-shape.png';
import FunfactImage3 from '../../assets/images/funfact/funfact-three-sm-image.jpg';
import FunfactImage4 from '../../assets/images/funfact/funfact-three-sm-image2.jpg';
function ChooseUsHomeFour({ className }) {
        const percentage1 = 140;
        const percentage2 = 200;
 
    return (
        <>
        <section className={`funfact-four-area pt-120 pb-120 ${className || ""}`}>
            <div className="funfact-four__text">
                <img src={FunfactImage1} alt="text"/>
            </div>
            <div className="funfact-four__shape">
                <img src={FunfactImage2} alt="shape"/>
            </div>
            <div className="funfact-four__wrp">
                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="funfact-four__left">
                            <div className="section-header">
                                <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">WHY CHOOSE US </h4>
                                <h2 className="wow splt-txt" data-splitting>Explore our Interior designs</h2>
                                <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                                <Link to="/page-projects" className="btn-one mt-30 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">All Projects <i className="fa-light fa-arrow-up-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row g-2">
                            <div className="col-sm-6">
                                <div className="image">
                                    <img src={FunfactImage3} alt="image"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="funfact-three__item light-area">
                                    <h2><CounterUp count={percentage1} time={3} /></h2>
                                    <h4 className="wow splt-txt" data-splitting>We have over 140+ Happy clients.</h4>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="funfact-three__item-dark bg-black light-area">
                                    <h2><CounterUp count={percentage2} time={3} /></h2>
                                    <h4 className="wow splt-txt" data-splitting>Customers are served by the Interior Design department</h4>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="image">
                                    <img src={FunfactImage4} alt="image"/>
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

export default ChooseUsHomeFour;
