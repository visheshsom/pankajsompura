import React from 'react';
import { Link } from 'react-router-dom';
import ServiceBgImage from '../../assets/images/bg/service-bg.jpg';
import ServiceImage1 from '../../assets/images/service/service-image.jpg';
import ServiceIconImage1 from '../../assets/images/icon/service-icon1.png';
import ServiceIconImage2 from '../../assets/images/icon/service-icon2.png';
import ServiceIconImage3 from '../../assets/images/icon/service-icon3.png';
import ServiceIconImage4 from '../../assets/images/icon/service-icon4.png';

function ServiceHomeThree({ className }) {
return (
<>

        <section className={`service-area ${className || ''}`} style={{ backgroundImage: `url(${ServiceBgImage})`}}>
            <div className="container-fluid p-0">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <div className="service__image">
                            <img src={ServiceImage1} alt="image"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-header mb-50">
                            <h2 className="wow splt-txt text-white" data-splitting>Elevate Your Space <br /> with good design</h2>
                        </div>
                        <div className="row g-5">
                            <div className="col-sm-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="service__item">
                                    <div className="icon">
                                        <img src={ServiceIconImage1} alt="icon"/>
                                    </div>
                                    <h4><Link to="/page-service-details">3D Design</Link></h4>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service__item">
                                    <div className="icon">
                                        <img src={ServiceIconImage2} alt="icon"/>
                                    </div>
                                    <h4><Link to="/page-service-details">Interior Drawing</Link></h4>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="service__item">
                                    <div className="icon">
                                        <img src={ServiceIconImage3} alt="icon"/>
                                    </div>
                                    <h4><Link to="/page-service-details">3D Model Building</Link></h4>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="service__item">
                                    <div className="icon">
                                        <img src={ServiceIconImage4} alt="icon"/>
                                    </div>
                                    <h4><Link to="/page-service-details">Building The Space</Link></h4>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
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

export default ServiceHomeThree;
