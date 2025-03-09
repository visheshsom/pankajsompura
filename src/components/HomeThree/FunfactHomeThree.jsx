import React, { useState } from 'react';
import CounterUp from '../../lib/CounterUp.jsx'; 
import FanfactSmImage1 from '../../assets/images/funfact/funfact-three-sm-image.jpg';
import FanfactSmImage2 from '../../assets/images/funfact/funfact-three-sm-image2.jpg';
import FanfactImage from '../../assets/images/funfact/funfact-three-image.jpg';

function FunfactHomeThree({ className }) {
        const percentage1 = 140;
        const percentage2 = 200;
 
    return (
        <>
            <section className={`funfact-three-area ${className || ""}`}>
                <div className="row g-2">
                    <div className="col-lg-6">
                        <div className="row g-2">
                            <div className="col-sm-6">
                                <div className="image">
                                    <img src={FanfactSmImage1} alt="image"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="funfact-three__item">
                                    <h2><CounterUp count={percentage1} time={3} /></h2>
                                    <h4 className="wow splt-txt" data-splitting>We have over 140+ Happy clients.</h4>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="funfact-three__item-dark">
                                    <h2><CounterUp count={percentage2} time={3} /></h2>
                                    <h4 className="wow splt-txt" data-splitting>Customers are served by the Interior Design department</h4>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="image">
                                    <img src={FanfactSmImage2} alt="image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <figure className="gsap__parallax">
                            <img src={FanfactImage} alt="image"/>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FunfactHomeThree;
