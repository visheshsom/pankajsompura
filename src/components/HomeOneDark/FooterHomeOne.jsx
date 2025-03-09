import React from 'react';
import {Link} from 'react-router-dom';
import FooterLogo from '../../assets/images/logo/300.png';
import FooterShape1 from '../../assets/images/shape/footer-shape1-dark.png';
import FooterShape2 from '../../assets/images/shape/footer-shape2-dark.png';

function FooterHomeOne({ className }) {
    return (
        <>
            <footer className={`footer-area dark-area ${className || ''}`}>
                <div className="footer__shape1">
                    <img src={FooterShape1} alt="shape"/>
                </div>
                <div className="footer__shape2">
                    <img src={FooterShape2} alt="shape"/>
                </div>
                <div className="container">
                    <div className="footer__wrp pt-120 pb-120">
                        <div className="footer__left">
                            <Link to="/" className="logo">
                                <img src={FooterLogo} alt="logo"/>
                            </Link>
                        </div>
                        <div className="footer__right">
                            <div className="footer__item">
                                <h4 className="title">Service</h4>
                                <ul>
                                    <li><Link to="#0">About Us</Link></li>
                                    <li><Link to="#0">Our Team</Link></li>
                                    <li><Link to="#0">Pricing Plans</Link></li>
                                    <li><Link to="#0">Get In Touch</Link></li>
                                </ul>
                            </div>
                            <div className="footer__item">
                                <h4 className="title">Useful links</h4>
                                <ul>
                                    <li><Link to="#0">Privacy & Terms</Link></li>
                                    <li><Link to="#0">FAQ Page</Link></li>
                                    <li><Link to="#0">Help Center</Link></li>
                                    <li><Link to="#0">Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="footer__item">
                                <h4 className="title">Follow Us</h4>
                                <ul>
                                    <li><Link to="#0">Facebook</Link></li>
                                    <li><Link to="#0">Instagram</Link></li>
                                    <li><Link to="#0">LinkedIn</Link></li>
                                    <li><Link to="#0">YouTube</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer__wrp-bottom sub-border pt-60 pb-60">
                        <p>Lorem ipsum dolor sit amet, cosectetur adip Duis convallis sit amet purus ac dapibus.</p>
                        <ul>
                            <li><Link to="#0">need@company.com</Link></li>
                            <li><Link to="#0">0000 - 222 - 333</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom__wrp">
                            <p>Copyright &copy; 2025 <Link to="#0">Pankaj Sompura</Link> Company</p>
                            <div className="socials">
                                <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                                <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                                <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterHomeOne;
