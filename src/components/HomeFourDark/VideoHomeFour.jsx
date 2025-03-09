import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import CounterUp from '../../lib/CounterUp.jsx'; 
import VideoBgImage from '../../assets/images/bg/plan-bg.jpg';

function VideoHomeFour({ className }) {
    const [isOpen, setOpen] = useState(false);
    const percentage1 = 19.485;
return (
<>
        <section className={`plan-area light-area ${className || ''}`} data-speed="0.5" data-parallax="scroll"
            style={{ backgroundImage: `url(${VideoBgImage})`}}>
            <div className="plan__content pt-120 pb-120">
                <div className="section-header">
                    <h2 className="wow splt-txt text-white" data-splitting>Have a project? Let’s discuss it.</h2>
                    <p className="wow fadeInUp text-white" data-wow-delay="200ms" data-wow-duration="1500ms">At Pankaj Sompura Architecture, we specialize in the art of designing and constructing temples that are not only architectural marvels <br />but also sanctuaries of spirituality. With decades of expertise, Pankaj Sompura brings a deep reverence to the tradition and culture inherent in temple architecture.</p>
                </div>
                <div className="counter">
                    <div className="d-flex gap-3 align-items-center">
                        <div className="icon">
                            <i className="fa-light fa-comment-lines"></i>
                        </div>
                        <h2><CounterUp count={percentage1} time={3} /></h2>
                    </div>
                    <p className="text-white mt-10">Trusted by Customers Worldwide</p>
                </div>
            </div>
            <div className="plan__videoBtn">
                <div className="video-btn video-pulse">
                    <a className="video-popup" onClick={() => setOpen(true)}><i className="fa-sharp fa-solid fa-play"></i></a>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="tFC3jE34ilc" onClose={() => setOpen(false)} />
</>
);
}

export default VideoHomeFour;
