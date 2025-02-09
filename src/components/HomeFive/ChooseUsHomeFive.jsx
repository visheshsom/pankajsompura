import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Chooseimage1 from '../../assets/images/choose/choose-two-image.jpg';


function ChooseUsHomeTwo({ className }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <section className={`choose-two-area pt-120 ${className || ""}`}>
            <div className="container">
                <div className="choose-two__wrp">
                    <div className="section-header text-center mb-50">
                        <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">WHY CHOOSE US</h4>
                        <h2 className="wow splt-txt text-black" data-splitting>Our skills are the primary <br /> reason clients choose us.</h2>
                    </div>
                    <div className="choose-two__image">
                        <img src={Chooseimage1} alt="image"/>
                        <div className="choose-two__content">
                            <h2 className="wow splt-txt" data-splitting>Discover the creative process Behind Interior Design.</h2>
                            <div className="choose-two__video">
                                <div className="video-btn video-pulse">
                                    <a className="video-popup" onClick={() => setOpen(true)}><i className="fa-solid fa-play"></i></a>
                                </div>
                                <div className="info">
                                    <h6 className="fw-600 text-white">Click to Watch</h6>
                                    <h3 className="wow splt-txt" data-splitting>See How We Operate</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
}

export default ChooseUsHomeTwo;
