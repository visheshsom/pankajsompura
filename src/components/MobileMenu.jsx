import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleToggle = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
        <ul className="mobile-menu">
            <li>
                <a href="#0" onClick={() => handleToggle("home")}>
                    Home <i className={`fa-solid ${activeMenu === "home" ? "fa-angle-up" : "fa-angle-down"}`}></i>
                </a>
            </li>
            <li>
                <Link to="/page-about">About Us</Link>
            </li>
            <li>
                <a href="#0" onClick={() => handleToggle("services")}>
                    Services <i className={`fa-solid ${activeMenu === "services" ? "fa-angle-up" : "fa-angle-down"}`}></i>
                </a>
                <ul className={`sub-menu ${activeMenu === "services" ? "d-block" : "d-none"}`}>
                    <li><Link to="/page-services">Service Grid</Link></li>
                    <li><Link to="/page-service-details">Service Details</Link></li>
                </ul>
            </li>
            <li>
                <a href="#0" onClick={() => handleToggle("pages")}>
                    Pages <i className={`fa-solid ${activeMenu === "pages" ? "fa-angle-up" : "fa-angle-down"}`}></i>
                </a>
                <ul className={`sub-menu ${activeMenu === "pages" ? "d-block" : "d-none"}`}>
                    <li><Link to="/contact-v1">Contact V1</Link></li>
                    <li><Link to="/page-gallery">Gallery</Link></li>
                    <li><Link to="/page-projects">Project Grid</Link></li>
                    <li><Link to="/page-project-details">Project Details</Link></li>
                    <li><Link to="/page-team">Team</Link></li>
                    <li><Link to="/page-team-details">Team Details</Link></li>
                    <li><Link to="/page-testimonial">Testimonials</Link></li>
                    <li><Link to="/page-faq">FAQ’s</Link></li>
                </ul>
            </li>
            <li>
                <a href="#0" onClick={() => handleToggle("blog")}>
                    Blog <i className={`fa-solid ${activeMenu === "blog" ? "fa-angle-up" : "fa-angle-down"}`}></i>
                </a>
                <ul className={`sub-menu ${activeMenu === "blog" ? "d-block" : "d-none"}`}>
                    <li><Link to="/news-grid">Blog Grid</Link></li>
                    <li><Link to="/news-details">Blog Details</Link></li>
                </ul>
            </li>
            <li>
                <Link to="/page-contact">Contact</Link>
            </li>
        </ul>
    );
};

export default MobileMenu;

