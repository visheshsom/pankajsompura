import React from 'react';
import {Link} from 'react-router-dom';
import BlogImage1 from '../../assets/images/blog/blog-image1.jpg';
import BlogImage2 from '../../assets/images/blog/blog-image2.jpg';
import BlogImage3 from '../../assets/images/blog/blog-image3.jpg';
import smallLogo from '../../assets/images/logo/100.png';

function BlogHomeThree({ className }) {
    return (
        <>
        <section className={`blog-area pt-120 pb-100 ${className || ""}`}>
            <div className="container">
                <div className="section-header__icon text-center mb-50">
                    <div className="icon mb-10 wow bounceIn">
                        <img src={smallLogo} alt="image"/>
                    </div>
                    <h2 className="wow splt-txt" data-splitting>Check Latest Blog Post <br/> from Blog List</h2>
                </div>
                <div className="blog__wrp">
                    <div className="row g-4">
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <Link to="/news-details" className="blog__image">
                                    <img src={BlogImage1} alt="image"/>
                                </Link>
                                <div className="blog__content">
                                    <ul>
                                        <li><strong>FURNITURE</strong></li>
                                        <li><span>May 25, 2024</span></li>
                                    </ul>
                                    <h4 className="mt-10"><Link to="/news-details">Detailed Accents on Custom of Built Office Design</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <Link to="/news-details" className="blog__image">
                                    <img src={BlogImage2} alt="image"/>
                                </Link>
                                <div className="blog__content">
                                    <ul>
                                        <li><strong>WOOD CUTTING</strong></li>
                                        <li><span>May 28, 2024</span></li>
                                    </ul>
                                    <h4 className="mt-10"><Link to="/news-details">We specialize in restoring antique Interior design</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <Link to="/news-details" className="blog__image">
                                    <img src={BlogImage3} alt="image"/>
                                </Link>
                                <div className="blog__content">
                                    <ul>
                                        <li><strong>CRAFTING</strong></li>
                                        <li><span>May 31, 2024</span></li>
                                    </ul>
                                    <h4 className="mt-10"><Link to="/news-details">We creating in the Unique of interior showcasing</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default BlogHomeThree;
