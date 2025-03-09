import React from 'react';
import { Link } from 'react-router-dom';
import FeatureIconImage1 from '../../assets/images/icon/feature-four-icon1-dark.png';
import FeatureIconImage2 from '../../assets/images/icon/feature-four-icon2-dark.png';
import FeatureIconImage3 from '../../assets/images/icon/feature-four-icon3-dark.png';

function FeatureHomeFour({ className }) {
return (
<>
        <section className={`feature-four-area pt-120 pb-120 ${className || ''}`}>
            <div className="container">
                <div className="feature-four__wrp">
                    <div className="section-header text-center mb-50">
                        <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">FEATURES</h4>
                        <h2 className="wow splt-txt" data-splitting>Our Features</h2>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="feature-four__item">
                                <div className="icon">
                                    <img src={FeatureIconImage1} alt="icon"/>
                                </div>
                                <h4><Link to="#0">Interior Project <br /> Estimate</Link></h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                <Link to="/page-service-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="feature-four__item">
                                <div className="icon">
                                    <img src={FeatureIconImage2} alt="icon"/>
                                </div>
                                <h4><Link to="#0">Suggest Design <br /> Idea</Link></h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                <Link to="/page-service-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="feature-four__item">
                                <div className="icon">
                                    <img src={FeatureIconImage3} alt="icon"/>
                                </div>
                                <h4><Link to="#0">Project Management <br /> & Support</Link></h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                <Link to="/page-service-details" className="btn-arrow"><i className="fa-light fa-arrow-up-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
</>
);
}

export default FeatureHomeFour;
