import React, { useEffect, useState } from 'react';
import logo1 from '../../assets/images/logo/300.png';
// import DarkLogo from './assets/images/logo/logo-light.png';
import SidebarLogo from '../../assets/images/logo/300.png';
import StickyHeader from '../../lib/StickyMenu.js';
import Navigation from '../Navigation.jsx';
import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu.jsx';


function Header({ className = '', scroll = false }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchPopupOpen, setSearchPopupOpen] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        StickyHeader();
        const checkDarkMode = () => {
            const bodyHasDarkMode = document.body.classList.contains('dark-mode');
            setDarkMode(bodyHasDarkMode);
        };
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        return () => {
            observer.disconnect();
        };
    }, []);

    const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
    const closeMobileMenu = () => setMobileMenuOpen(false);
    const toggleSearchPopup = () => setSearchPopupOpen((prev) => !prev); // Toggle search popup
    const closeSearchPopup = () => setSearchPopupOpen(false); // Close search popup



    return (

<div>
    <div className="mouse-cursor cursor-outer"/>
    <div className="mouse-cursor cursor-inner"/>

    <div className="header-top-area d-none d-lg-block $">
        <div className="container">
            <div className="header-top__wrp">
                <div className="header-top__socials">
                    <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                    <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                    <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                    <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                </div>
                <ul className="header-top__links">
                    <li><i className="fa-light fa-location-dot"></i> <Link to="#0">Ahmedabad, Gujarat, India</Link></li>
                    <li><i className="fa-light fa-envelope-open-text"></i> <Link to="#0">design.pankajsompura@gmail.com</Link></li>
                </ul>
            </div>
        </div>
    </div>
    <header className="header-area">
        <div className="container">
            <div className="header__main">
                <Link to="/" className="logo">
                    <img src={logo1} alt="logo" style={{ height: "120px", width: "145px" }}/>
                </Link>
                <div className="main-menu">
                    <nav>
                        <Navigation />
                    </nav>
                    <div className="menu-btns">
                        <button className="search-trigger d-none d-lg-block" onClick={toggleSearchPopup}>
                            <i className="fa-light fa-magnifying-glass"></i>
                        </button>
                        <button onClick={toggleMobileMenu} className="menubars" type="button" data-bs-toggle="offcanvas" data-bs-target="#menubar">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div className={`offcanvas ${isMobileMenuOpen ? 'open' : ''}`}> 
        <div className="offcanvas-header">
            <Link to="/" className="logo"> <img src={SidebarLogo} alt="logo"/></Link>
            <button type="button" className="btn-close" onClick={closeMobileMenu}><i className="fa-regular fa-xmark"></i></button>
        </div>
        <div className="offcanvas-body sidebar__body">
            <div className="mobile-menu overflow-hidden">
                <MobileMenu />
            </div>
            
            <div className="d-none d-lg-block">
                <h5 className="text-white mb-20">About Us</h5>
                <p className="sidebar__text">Sculpting Sacred Spaces: Masterful Temple Architecture for Spiritual Design Legacy.</p>
            </div>
            <div className="sidebar__contact-info mt-30">
                <h5 className="text-white mb-20">Contact Info</h5>
                <ul>
                    <li><i className="fa-solid fa-location-dot"></i> <Link to="#0">Ahmedabad, Gujarat, India</Link></li>
                    <li className="py-2"><i className="fa-solid fa-phone-volume"></i> <Link to="tel:+919825166726">+91 9825166726</Link></li>
                    <li><i className="fa-solid fa-paper-plane"></i> <Link to="#0">design.pankajsompura@gmail.com</Link></li>
                </ul>
            </div>
            
            <div className="sidebar__socials mt-40">
                <ul>
                    <li>
                        <Link to="#0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.76562 0H8.20406C9.50719 0.0371875 10.8041 0.385625 11.9359 1.03531C13.3297 1.82094 14.4756 3.03625 15.1816 4.47188C15.6875 5.49438 15.9603 6.62656 16 7.76562V8.205C15.9647 9.38344 15.6775 10.5553 15.1419 11.6069C14.6209 12.6316 13.8803 13.5447 12.9794 14.2594C12.0306 15.0175 10.9072 15.5569 9.71937 15.8141C9.22219 15.9275 8.71313 15.9788 8.20438 16H7.795C6.40844 15.9609 5.03281 15.5628 3.84875 14.8387C2.44469 13.985 1.3125 12.6919 0.659063 11.1838C0.252187 10.255 0.0365625 9.2475 0 8.23531V7.79406C0.0359375 6.53 0.366875 5.27437 0.976875 4.16594C1.73094 2.78781 2.8975 1.64031 4.28937 0.911563C5.35844 0.34625 6.55844 0.041875 7.76562 0ZM3.40094 3.29594C4.59812 5.03813 5.79531 6.78 6.99188 8.52219C5.79563 9.91344 4.59812 11.3038 3.40219 12.6953C3.6325 12.6966 3.86313 12.695 4.09344 12.6962C4.13844 12.6884 4.20125 12.7166 4.23281 12.6722C5.27312 11.4641 6.3125 10.2553 7.35219 9.04656C8.18937 10.2625 9.02344 11.4809 9.86156 12.6962C10.7741 12.695 11.6866 12.6962 12.5988 12.6956C11.3594 10.8869 10.1119 9.08313 8.87594 7.27219C10.0203 5.94969 11.1578 4.62156 12.2987 3.29625C12.0281 3.29563 11.7578 3.29563 11.4872 3.29625C10.4987 4.44875 9.50437 5.59656 8.51844 6.75094C7.72031 5.60344 6.93437 4.44688 6.14062 3.29625C5.2275 3.29563 4.31437 3.29594 3.40094 3.29594Z"
                                    fill="white" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to="#0">
                            <svg width="8" height="16" viewBox="0 0 8 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.10223 8.99555V16H1.97333V8.99555H0V6.09778H1.97333V3.89334C1.97333 1.38667 3.46666 0 5.76 0C6.85333 0 8 0.195557 8 0.195557V2.65778H6.73778C5.49334 2.65778 5.10223 3.43111 5.10223 4.22222V6.09778H7.88444L7.44 8.99555H5.10223Z" fill="white" />
                            </svg>
                        </Link>
                    </li>

                    <li>
                        <Link to="#0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.58958 15.9911H0.222698V5.89045H3.58958V15.9911ZM3.92717 1.96389C3.92717 0.897859 3.08323 0.0361424 2.01719 0.000607979C0.933392 -0.0260429 0.0272588 0.826778 0.00060798 1.91058C-0.0260429 2.99438 0.826779 3.90051 1.91058 3.92716C3.01215 3.93605 3.9094 3.06546 3.92717 1.96389ZM15.9467 9.88807C15.9467 6.74327 13.9124 5.78383 12.1801 5.78383C10.963 5.7483 9.81701 6.34351 9.15074 7.35624V5.89932H5.89933V16H9.26622V10.7587C9.26622 10.7054 9.26622 10.6521 9.26622 10.5988C9.26622 10.5988 9.26622 10.5988 9.26622 10.5899C9.19515 9.51495 10.0124 8.58218 11.0874 8.51111C11.9668 8.51111 12.6331 9.07966 12.6331 10.6787V16H16L15.9556 9.89695L15.9467 9.88807Z" fill="white" />
                            </svg>
                        </Link>
                    </li>

                    <li>
                        <Link to="#0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9466 4.69593C15.8843 3.41522 15.5906 2.27682 14.6563 1.34297C13.7219 0.409114 12.5829 0.11562 11.3014 0.053363C9.97553 -0.0177877 6.01557 -0.0177877 4.69855 0.053363C3.41713 0.11562 2.28699 0.409114 1.34372 1.34297C0.400455 2.27682 0.115684 3.41522 0.0533926 4.69593C-0.0177975 6.02111 -0.0177975 9.97887 0.0533926 11.3041C0.115684 12.5848 0.409354 13.7232 1.34372 14.657C2.28699 15.5909 3.41713 15.8844 4.69855 15.9466C6.02447 16.0178 9.98443 16.0178 11.3014 15.9466C12.5829 15.8844 13.7219 15.5909 14.6563 14.657C15.5906 13.7232 15.8843 12.5848 15.9466 11.3041C16.0178 9.97887 16.0178 6.02112 15.9466 4.70483V4.69593ZM7.99111 12.2201C5.65963 12.2201 3.76419 10.3257 3.76419 7.99555C3.76419 5.66536 5.65963 3.77098 7.99111 3.77098C10.3226 3.77098 12.218 5.66536 12.218 7.99555C12.218 10.3257 10.3226 12.2201 7.99111 12.2201ZM12.9032 3.99332C12.4138 3.99332 12.0133 3.5931 12.0133 3.10394C12.0133 2.61478 12.4049 2.21456 12.9032 2.21456C13.3926 2.21456 13.7931 2.61478 13.7931 3.10394C13.7931 3.5931 13.3926 3.99332 12.9032 3.99332ZM10.8832 7.99555C10.8832 9.58754 9.58399 10.886 7.99111 10.886C6.39823 10.886 5.09901 9.58754 5.09901 7.99555C5.09901 6.40355 6.39823 5.10505 7.99111 5.10505C9.58399 5.10505 10.8832 6.40355 10.8832 7.99555Z" fill="white" />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className={`search-wrap ${isSearchPopupOpen ? 'active' : ''}`}>
        <div className="search-inner">
            <i className="fa-light fa-xmark search-close" id="search-close" onClick={closeSearchPopup}></i>
            <div className="search-cell">
                <form method="get">
                    <div className="search-field-holder">
                        <input type="search" className="main-search-input" placeholder="Search..."/>
                    </div>
                </form>
            </div>
        </div>
    </div>

  

</div>
    );
}

export default Header;
