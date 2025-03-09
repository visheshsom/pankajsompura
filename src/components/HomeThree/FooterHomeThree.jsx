import React from 'react';
import {Link} from 'react-router-dom';
import FooterLogo from '../../assets/images/logo/300.png';
import FooterShape1 from '../../assets/images/shape/footer-three-shape-left.png';
import FooterShape2 from '../../assets/images/shape/funfact-four-shape-dark.png';

function FooterHomeThree({ className }) {
    return (
        <>
            <footer className={`footer-three-area ${className || ''}`}>
                <div className="footer-three__shape-left">
                    <img src={FooterShape1} alt="shape"/>
                </div>
                <div className="footer-three__shape-right">
                    <img src={FooterShape2} alt="shape"/>
                </div>
                <div className="container">
                    <div className="footer-three__wrp pt-120 pb-120">
                        <div className="footer-three__left">
                            <Link to="/" className="logo">
                                <img src={FooterLogo} alt="logo"/>
                            </Link>
                        </div>
                        <div className="footer-three__right">
                            <div className="footer-three__item-wrp">
                                <div className="footer-three__item">
                                    <h4 className="title">Service</h4>
                                    <ul>
                                        <li><Link to="#0">Temple Design</Link></li>
                                        <li><Link to="#0">Inlay Work</Link></li>
                                        <li><Link to="#0">Consultancy</Link></li>
                                        <li><Link to="#0">3D Modelling</Link></li>
                                        <li><Link to="#0">Supervision</Link></li>
                                    </ul>
                                </div>
                                <div className="footer-three__item">
                                    <h4 className="title">Company</h4>
                                    <ul>
                                        <li><Link to="#0">Home</Link></li>
                                        <li><Link to="#0">About Us</Link></li>
                                        <li><Link to="#0">Services</Link></li>
                                        <li><Link to="#0">Career</Link></li>
                                        <li><Link to="#0">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="footer-three__item-last">
                                    <h4 className="title">Newsletter</h4>
                                    <p>Feel free to reach out if you want to collaborate with us, or simply chat.</p>
                                    <div className="mailUs mt-30">
                                        <span><i className="fa-light fa-envelope"></i></span>
                                        <input type="email" placeholder="Enter your email"/>
                                        <button><i className="fa-sharp fa-solid fa-paper-plane"></i></button>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-three__item-wrp mt-80">
                                <div className="footer-three__item">
                                    <h4 className="title">Ahmedabad</h4>
                                    <ul>
                                        <li><Link to="#0">203, 6/1 Takshashila Apartment, Thaltej, Ahmedabad, Gujarat 380059, India</Link></li>
                                        <li><Link to="#0">(+91) 98251 66726
                                                info@pankajsompura.com</Link></li>
                                    </ul>
                                </div>
                                
                                <div className="footer-three__item-last">
                                    <h4 className="title">Follow Us</h4>
                                    <div className="socials">
                                        <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fa-brands fa-x-twitter"></i></Link>
                                        <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                                        <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-three__copyright">
                    <p>Copyright &copy; 2025 <Link to="#0">Pankaj Sompura</Link> Company</p>
                </div>
            </footer>
        </>
    );
}

export default FooterHomeThree;
