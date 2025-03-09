import React from 'react';
import ContactBgImage1 from '../../assets/images/bg/talk-three-bg.jpg';


function ContactHomeThree({ className }) {
    return (
        <>
        <section className={`talk-three-area ${className || ""}`} data-speed="0.5" data-parallax="scroll"
            style={{ backgroundImage: `url(${ContactBgImage1})`}}>
            <div className="row g-0 justify-content-end">
                <div className="col-lg-7">
                    <div className="talk-three__form dark-area pt-120 pb-120">
                        <div className="section-header mb-50">
                            <h2 className="wow splt-txt" data-splitting>Call us for any inquiry and <br /> get in touch with us</h2>
                        </div>
                        <form>
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Your Name"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="email" placeholder="Email Address"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Phone"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Type Service Name"/>
                                </div>
                            </div>
                            <textarea className="mt-4" name="masage" id="masage" placeholder="Write a Message"></textarea>
                            <button className="btn-one mt-30">Submit Now <i className="fa-light fa-arrow-up-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default ContactHomeThree;
