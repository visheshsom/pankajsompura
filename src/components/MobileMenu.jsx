// // MobileMenu.jsx
// import { useState } from "react";
// import { Link } from "react-router-dom"; // Ensure correct import for react-router-dom

// const MobileMenu = () => {
//     const [isActive, setIsActive] = useState({ status: false, key: "" });
//     const [isSubActive, setSubIsActive] = useState({ status: false, key: "" });

//     const handleClick = (key) => {
//         setIsActive((prevState) =>
//             prevState.key === key
//                 ? { status: false, key: "" }
//                 : { status: true, key }
//         );
//     };
//     const handleSubClick = (key) => {
//         // Handle second-level menu toggle
//         setSubIsActive((prevState) =>
//             prevState.key === key
//                 ? { status: false, key: "" }
//                 : { status: true, key }
//         );
//     };

//     return (
//         <>
//             <ul>
//                 <li className={isActive.key === 1 ? "d-block" : "d-none"}>
//                     <Link to="#0">Home <i className="fa-solid fa-angle-down"></i></Link>
//                     <ul className="sub-menu">
//                         <li><Link to="/">Home Page 01</Link></li>
//                         <li><Link to="/index-2">Home Page 02</Link></li>
//                         <li><Link to="/index-3">Home Page 03</Link></li>
//                         <li><Link to="/index-4">Home Page 04</Link></li>
//                         <li><Link to="/index-5">Home Page 05</Link></li>
//                     </ul>
//                     <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)} >
//                     <i className="fa fa-angle-down"></i>
//                     </div>
//                 </li>
//                 <li><Link to="/page-about">About Us</Link></li>
//                 <li>
//                     <Link to="#0">Services <i className="fa-solid fa-angle-down"></i></Link>
//                     <ul className={isActive.key === 2 ? "d-block" : "d-none"}>
//                         <li><Link to="/page-services">Service Grid</Link></li>
//                         <li><Link to="/page-service-details">Service Details</Link></li>
//                     </ul>
//                     <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)} >
//                     <i className="fa fa-angle-down"></i>
//                     </div>
//                 </li>
//                 <li>
//                     <Link to="#0">Pages <i className="fa-solid fa-angle-down"></i></Link>
//                     <ul className={isActive.key === 2 ? "d-block" : "d-none"}>
//                         <li><Link to="contact">Contact V1</Link></li>
//                         <li><Link to="/page-projects">Project Grid</Link></li>
//                         <li><Link to="/page-project-details">Project Details</Link></li>
//                         <li><Link to="/page-team">Team</Link></li>
//                         <li><Link to="/page-team-details">Team Details</Link></li>
//                         <li><Link to="/page-testimonial">Testimonials</Link></li>
//                         <li><Link to="/page-faq">FAQ’s</Link></li>
//                         <li><Link to="/shop-products">Shop Product</Link></li>
//                         <li><Link to="/shop-products-sidebar">Products Sidebar</Link></li>
//                         <li><Link to="/shop-product-details">Product Details</Link></li>
//                         <li><Link to="/shop-checkout">Checkout</Link></li>
//                         <li><Link to="/shop-cart">Cart</Link></li>
//                         <li><Link to="/page-404">404 Error</Link></li>
//                     </ul>
//                     <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)} >
//                     <i className="fa fa-angle-down"></i>
//                     </div>
//                 </li>
//                 <li>
//                     <Link to="#0">Blog <i className="fa-solid fa-angle-down"></i></Link>
//                     <ul className={isActive.key === 3 ? "d-block" : "d-none"}>
//                         <li><Link to="/news-grid">Blog Grid</Link></li>
//                         <li><Link to="/news-details">Blog Details</Link></li>
//                     </ul>
//                     <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)} >
//                     <i className="fa fa-angle-down"></i>
//                     </div>
//                 </li>
//                 <li><Link to="/page-contact">Contact</Link></li>
//             </ul>

//         </>
//     );
// };

// export default MobileMenu;


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
                <ul className={`sub-menu ${activeMenu === "home" ? "d-block" : "d-none"}`}>
                    <li><Link to="/">Home Page 01</Link></li>
                    <li><Link to="/index-2">Home Page 02</Link></li>
                    <li><Link to="/index-3">Home Page 03</Link></li>
                    <li><Link to="/index-4">Home Page 04</Link></li>
                    <li><Link to="/index-5">Home Page 05</Link></li>
                </ul>
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
                    <li><Link to="/contact">Contact V1</Link></li>
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

