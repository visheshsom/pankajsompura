import React from 'react';
import { Link } from 'react-router-dom';

function Navigation2() {
    return (
        <nav>

            <ul>
                <li>
                    <Link to="#0">Home <i className="fa-solid fa-angle-down"></i></Link>
                   
                </li>
                
                <li><Link to="/page-about">About Us</Link></li>
                <li>
                    <Link to="#0">Services <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="sub-menu">
                            <li><Link to="/page-services">Service Grid</Link></li>
                            <li><Link to="/page-service-details">Service Details</Link></li>
                        </ul>
                </li>
                <li>
                    <Link to="#0">Pages <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="sub-menu">
                            <li><Link to="/contact">Contact V1</Link></li>
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
                    <Link to="#0">Blog <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="sub-menu">
                            <li><Link to="/news-grid">Blog Grid</Link></li>
                            <li><Link to="/news-details">Blog Details</Link></li>
                        </ul>
                </li>
                <li><Link to="/page-contact" className="btn-one py-2 px-4 text-white">Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation2;
