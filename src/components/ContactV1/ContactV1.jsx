import React from 'react';
import ContactImage from '../../assets/images/shape/talk-shape.png';
import ContactBgImage from '../../assets/images/shape/talk-item-shape.png';


function ContactV1({ className }) {
    return (
        <>
            <section className={`talk-area pb-120 ${className || ""}`}>
                <div className="talk__shape">
                    <img src={ContactImage} alt="shape"/>
                </div>
                <div className="container">
                    <div className="talk__wrp">
                        <div className="row g-4 align-items-center justify-content-between">
                            <div className="col-lg-5 col-xxl-4">
                                <div className="talk__item" style={{ backgroundImage: `url(${ContactBgImage})`}}>
                                    <h3 className="mb-40 wow splt-txt" data-splitting>+(91) 98251 66726 </h3>
                                    <ul>
                                        <li>
                                            <h4 className="wow splt-txt" data-splitting>Address</h4>
                                            <p>6/1 3rd-Floor Takshashila Apartment, Thaltej, Ahmedabad, Gujarat 380059</p>
                                        </li>
                                        <li>
                                            <h4 className="wow splt-txt" data-splitting>Email</h4>
                                            <p>pankajsompura@pankajsompura.com</p>
                                        </li>
                                    </ul>
                                    <div className="socials">
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa-brands fa-dribbble"></i></a>
                                        <a href="#"><i className="fa-brands fa-behance"></i></a>
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="talk__form">
                                    <div className="section-header mb-30">
                                        <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">LET'S
                                            CHAT
                                        </h4>
                                        <h2 className="wow splt-txt" data-splitting>SEND A <span className="fw-300">MESSAGE</span>
                                        </h2>
                                    </div>
                                    <form>
                                        <div className="row g-4">
                                            <div className="col-sm-6">
                                                <input type="text" placeholder="Name"/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="email" placeholder="Email"/>
                                            </div>
                                            <div className="col-sm-12">
                                                <input type="text" placeholder="Subject"/>
                                            </div>
                                        </div>
                                        <textarea className="mt-4" name="masage" id="masage" placeholder="Message"></textarea>
                                        <button className="submit mt-30">Let's Talk</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactV1;
