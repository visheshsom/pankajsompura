import React from 'react';
import { Link } from 'react-router-dom';

function Navigation2() {
    return (
        <nav>

            <ul>
                <li>
                    <Link to="#0">Home <i className="fa-solid fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link to="/">Home Page 01</Link></li>
                        <li><Link to="/index-2">Home Page 02</Link></li>
                        <li><Link to="/index-3">Home Page 03</Link></li>
                        <li><Link to="/index-4">Home Page 04</Link></li>
                        <li><Link to="/index-5">Home Page 05</Link></li> 
                        <li>
                            <Link className="arrow" to="#">RTL</Link>
                            <ul className="sub-sub-menu">
                                <li><Link to="/index-1-rtl">RTL Style 01</Link></li>
                                <li><Link to="/index-2-rtl">RTL Style 02</Link></li>
                                <li><Link to="/index-3-rtl">RTL Style 03</Link></li>
                                <li><Link to="/index-4-rtl">RTL Style 04</Link></li>
                                <li><Link to="/index-5-rtl">RTL Style 05</Link></li>
                            </ul>
                        </li>
                    </ul>
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
                            <li><Link to="/shop-products">Shop Product</Link></li>
                            <li><Link to="/shop-products-sidebar">Products Sidebar</Link></li>
                            <li><Link to="/shop-product-details">Product Details</Link></li>
                            <li><Link to="/shop-checkout">Checkout</Link></li>
                            <li><Link to="/shop-cart">Cart</Link></li>
                            <li><Link to="/page-404">404 Error</Link></li>
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
