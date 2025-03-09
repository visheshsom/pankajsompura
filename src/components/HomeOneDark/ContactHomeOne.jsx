import React, { useEffect } from 'react';
import ContactShapeImage from '../../assets/images/shape/contact-shape.png';
import ContactIconImage1 from '../../assets/images/icon/contact-icon1.png';
import ContactIconImage2 from '../../assets/images/icon/contact-icon2.png';
import '../../assets/css/protection.css';

// Define secure image URLs
const BACKEND_URL = 'http://localhost:5001';
const secureImages = {
    contact: `${BACKEND_URL}/api/images/View14.jpg`,
};

// CSS to prevent image interactions
const secureImageStyle = {
    pointerEvents: 'none',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    WebkitTouchCallout: 'none',
    draggable: false,
    WebkitUserDrag: 'none',
    KhtmlUserDrag: 'none',
    MozUserDrag: 'none',
    OUserDrag: 'none',
};

// CSS for the container to prevent right-click
const secureContainerStyle = {
    position: 'relative',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
};

function ContactHomeOne({ className }) {
    useEffect(() => {
        // Add protection to images after they load
        const images = document.querySelectorAll('.protected-image');
        const containers = document.querySelectorAll('.protected-container');

        const preventActions = (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };

        // Add multiple event listeners to both images and their containers
        [...images, ...containers].forEach(element => {
            element.addEventListener('contextmenu', preventActions, true);
            element.addEventListener('dragstart', preventActions, true);
            element.addEventListener('mousedown', preventActions, true);
            element.addEventListener('touchstart', preventActions, true);
            element.addEventListener('copy', preventActions, true);
            element.addEventListener('cut', preventActions, true);
            element.addEventListener('paste', preventActions, true);
            element.addEventListener('selectstart', preventActions, true);
        });

        // Global right-click prevention for protected areas
        const handleGlobalRightClick = (e) => {
            if (e.target.closest('.protected-container')) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        };

        document.addEventListener('contextmenu', handleGlobalRightClick, true);

        return () => {
            [...images, ...containers].forEach(element => {
                element.removeEventListener('contextmenu', preventActions, true);
                element.removeEventListener('dragstart', preventActions, true);
                element.removeEventListener('mousedown', preventActions, true);
                element.removeEventListener('touchstart', preventActions, true);
                element.removeEventListener('copy', preventActions, true);
                element.removeEventListener('cut', preventActions, true);
                element.removeEventListener('paste', preventActions, true);
                element.removeEventListener('selectstart', preventActions, true);
            });
            document.removeEventListener('contextmenu', handleGlobalRightClick, true);
        };
    }, []);

    return (
        <>
            <section className={`contact-area ${className || ""}`}>
                <div className="contact__shape">
                    <img src={ContactShapeImage} alt="shape"/>
                </div>
                <div className="col-lg-7">
                    <div className="contact__image">
                        <figure className="gsap__parallax protected-container" style={secureContainerStyle}>
                            <img 
                                src={secureImages.contact} 
                                alt="image"
                                className="protected-image"
                                style={secureImageStyle}
                                draggable="false"
                            />
                        </figure>
                    </div>
                </div>
                <div className="contact__wrp">
                    <div className="contact__form dark-area">
                        <div className="section-header mb-30">
                            <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">CONTACT US</h4>
                            <h2 className="wow splt-txt" data-splitting>Get in Touch</h2>
                        </div>
                        <form>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Your Name"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="email" placeholder="Email Address"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Enter Subject"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Enter Phone"/>
                                </div>
                            </div>
                            <textarea className="my-3" name="masage" id="masage" placeholder="Write a Message"></textarea>
                            <button className="submit">SEND A MESSAGE</button>
                        </form>
                    </div>
                    <div className="contact__item light-area">
                        <div className="inner-box">
                            <div className="icon mb-20">
                                <img src={ContactIconImage1} alt="icon"/>
                            </div>
                            <div className="icon-two">
                                <img src={ContactIconImage2} alt="icon"/>
                            </div>
                            <div className="info">
                                <h6 className="mb-1">Call us for any inquiry</h6>
                                <h3>(+91) 98251 66726</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        {/* <section class="contact-area">
            <div class="contact__shape">
                <img src="assets/images/shape/contact-shape-dark.png" alt="shape">
            </div>
            <div class="col-lg-7">
                <div class="contact__image">
                    <figure class="gsap__parallax">
                        <img src="assets/images/contact/contact-image.jpg" alt="image">
                    </figure>
                </div>
            </div>
            <div class="contact__wrp">
                <div class="contact__form dark-area">
                    <div class="section-header mb-30">
                        <h4 class="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">CONTACT US</h4>
                        <h2 class="wow splt-txt" data-splitting>Get in Touch</h2>
                    </div>
                    <form action="#">
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <input type="text" placeholder="Your Name">
                            </div>
                            <div class="col-sm-6">
                                <input type="email" placeholder="Email Address">
                            </div>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Enter Subject">
                            </div>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Enter Phone">
                            </div>
                        </div>
                        <textarea class="my-3" name="masage" id="masage" placeholder="Write a Message"></textarea>
                        <button class="submit">SEND A MESSAGE</button>
                    </form>
                </div>
                <div class="contact__item light-area">
                    <div class="inner-box">
                        <div class="icon mb-20">
                            <img src="assets/images/icon/contact-icon1.png" alt="icon">
                        </div>
                        <div class="icon-two">
                            <img src="assets/images/icon/contact-icon2.png" alt="icon">
                        </div>
                        <div class="info">
                            <h6 class="mb-1">Call us for any inquiry</h6>
                            <h3>(000) 222 22 333</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        </>
    );
}

export default ContactHomeOne;
