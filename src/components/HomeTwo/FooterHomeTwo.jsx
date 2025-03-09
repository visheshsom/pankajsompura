import React from 'react';
import {Link} from 'react-router-dom';
import FooterLogo from '../../assets/images/logo/300.png';
import FooterShape1 from '../../assets/images/shape/footer-shape1.png';
import FooterShape2 from '../../assets/images/shape/footer-shape2.png';

function FooterHomeTwo({ className }) {
    return (
        <>
            <footer className={`footer-two-area pt-120 pb-120 ${className || ''}`}>
                <div className="footer-two__shape">
                    <img src={FooterShape1} alt="shape"/>
                </div>
                <div className="footer-two__shape-two">
                    <img src={FooterShape2} alt="shape"/>
                </div>
                <div className="container">
                    <div className="footer-two__wrp">
                        <div className="d-flex gap-4 flex-wrap flex-md-nowrap justify-content-between">
                            <div className="footer-two__item">
                                <Link to="/" className="logo">
                                    <img src={FooterLogo} alt="logo"/>
                                </Link>
                                <p className="mt-30">Subscribe our newsletter:</p>
                                <div className="subscribe mt-25">
                                    <input type="email" placeholder="Enter our email"/>
                                    <button><i className="fa-regular fa-arrow-right"></i></button>
                                </div>
                            </div>
                            <div className="footer-two__link">
                                <div className="footer-two__link-item">
                                    <ul>
                                        <li>
                                            <h4><Link to="/">Home</Link></h4>
                                        </li>
                                        <li>
                                            <h4><Link to="/about">About</Link></h4>
                                        </li>
                                        <li>
                                            <h4><Link to="/service">Services</Link></h4>
                                        </li>
                                        <li>
                                            <h4><Link to="/page-contact">Contact</Link></h4>
                                        </li>
                                        <li>
                                            <h4>
                                                <Link to="/blog">News</Link>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-two__link-item">
                                    <ul>
                                        <li><Link to="#0">Privacy Policy</Link></li>
                                        <li><Link to="#0">Terms and conditions</Link></li>
                                        <li><Link to="#0">Cookie Policy</Link></li>
                                        <li><Link to="#0">Careers</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-two__bottom mt-120">
                            <div className="footer-two__item-bottom">
                                <div className="socials">
                                    <Link to="#"><i className="fa-brands fa-behance"></i></Link>
                                    <Link to="#"><i className="fa-brands fa-dribbble"></i></Link>
                                    <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                                    <Link to="#"><i className="fa-brands fa-github"></i></Link>
                                </div>
                                <p>&copy; 2024 Company. All Rights Reserved.</p>
                            </div>
                            <div className="footer-two__address">
                                <div className="footer-two__address-item">
                                    <h5>Mexico</h5>
                                    <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                                </div>
                                <div className="footer-two__address-item">
                                    <h5>Germany</h5>
                                    <p>Behove 56, 4563 MC De Lier, Netherlands +65 542 698 541</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterHomeTwo;
