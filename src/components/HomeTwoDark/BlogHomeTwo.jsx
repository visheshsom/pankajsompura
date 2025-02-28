import React from 'react';
import {Link} from 'react-router-dom';
import BlogImage1 from '../../assets/images/blog/bli1.jpg';
import BlogImage2 from '../../assets/images/blog/bli2.jpg';
import BlogImage3 from '../../assets/images/blog/bli3.jpg';
import smallLogo from '../../assets/images/logo/100.png';

function BlogHomeTwo({ className }) {
    return (
        <>
         <section className={`blog-area pt-120 pb-100 ${className || ""}`}>
                    <div className="container">
                        <div className="section-header__icon text-center mb-50">
                            <div className="icon mb-10 wow bounceIn">
                                <img src={smallLogo} alt="shape"/>
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
                                                <li><strong>Modern Temple Architecture</strong></li>
                                                <li><span>April 15, 2008</span></li>
                                            </ul>
                                            <h4 className="mt-10"><Link to="/news-details">The Divine Grandeur of "Shri Sammet Shikhar": A Testament to Timeless Craftsmanship</Link></h4>
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
                                                <li><strong>Innovative Design</strong></li>
                                                <li><span>June 12, 2019</span></li>
                                            </ul>
                                            <h4 className="mt-10"><Link to="/news-details">Sacred Stones Speak: The Story Behind "Shri Namiun Parshwanath Jain Mandir"</Link></h4>
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
                                                <li><strong>Intricacy</strong></li>
                                                <li><span>Feb 16, 2014</span></li>
                                            </ul>
                                            <h4 className="mt-10"><Link to="/news-details">Art Meets Spirituality: The Masterful Stonework of "Shri Maharashtra Bhuvan"</Link></h4>
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

export default BlogHomeTwo;
