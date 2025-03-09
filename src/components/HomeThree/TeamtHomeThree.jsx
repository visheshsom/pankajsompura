import React from 'react';
import { Link } from 'react-router-dom';
import TeamImage1 from '../../assets/images/team/team-image1.png';
import TeamImage2 from '../../assets/images/team/team-image2.png';
import TeamImage3 from '../../assets/images/team/team-image3.png';
import TeamImage4 from '../../assets/images/team/team-image4.png';
import TeamImage5 from '../../assets/images/team/team-image5.png';
import TeamImage6 from '../../assets/images/team/team-image6.png';

function TeamtHomeThree({ className }) {
return (
    <>
        <section className={`team-area pt-120 pb-120 ${className || ''}`}>
            <div className="container">
                <div className="team__wrp">
                    <div className="section-header mb-50">
                        <h2 className="wow splt-txt" data-splitting>Our Team Member</h2>
                    </div>
                    <div className="row g-2 g-sm-4 g-lg-5 ">
                        <div className="col-6 col-md-4 col-lg-3 wow fadeInLeft" data-wow-delay="00ms"
                            data-wow-duration="1500ms">
                            <div className="team__item">
                                <Link to="/page-team-details" className="team__image">
                                    <img src={TeamImage1} alt="image"/>
                                </Link>
                                <h3 className="fw-600 mt-15"><Link className="primary-hover" to="/page-team-details">Esther Howard</Link></h3>
                                <span>CEO Founder</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 wow fadeInLeft" data-wow-delay="200ms"
                            data-wow-duration="1500ms">
                            <div className="team__item">
                                <Link to="/page-team-details" className="team__image">
                                    <img src={TeamImage2} alt="image"/>
                                </Link>
                                <h3 className="fw-600 mt-15"><Link className="primary-hover" to="/page-team-details">Jenny Wilson</Link></h3>
                                <span>CO Founder</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 wow fadeInLeft" data-wow-delay="300ms"
                            data-wow-duration="1500ms">
                            <div className="team__item">
                                <Link to="/page-team-details" className="team__image">
                                    <img src={TeamImage3} alt="image"/>
                                </Link>
                                <h3 className="fw-600 mt-15"><Link className="primary-hover" to="/page-team-details">Lois Lane</Link></h3>
                                <span>Project Management</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 wow fadeInLeft" data-wow-delay="400ms"
                            data-wow-duration="1500ms">
                            <div className="team__item">
                                <Link to="/page-team-details" className="team__image">
                                    <img src={TeamImage4} alt="image"/>
                                </Link>
                                <h3 className="fw-600 mt-15"><Link className="primary-hover" to="/page-team-details">Guy Hawkins</Link></h3>
                                <span>Lead of Technicial</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 wow fadeInLeft" data-wow-delay="500ms"
                            data-wow-duration="1500ms">
                            <div className="team__item">
                                <Link to="/page-team-details" className="team__image">
                                    <img src={TeamImage5} alt="image"/>
                                </Link>
                                <h3 className="fw-600 mt-15"><Link className="primary-hover" to="/page-team-details">Harleen Quinzel</Link></h3>
                                <span>SEO/Marketing</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 wow fadeInLeft" data-wow-delay="600ms"
                            data-wow-duration="1500ms">
                            <div className="team__item">
                                <Link to="/page-team-details" className="team__image">
                                    <img src={TeamImage6} alt="image"/>
                                </Link>
                                <h3 className="fw-600 mt-15"><Link className="primary-hover" to="/page-team-details">Albert Flores</Link></h3>
                                <span>Web Developer</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 wow fadeInLeft" data-wow-delay="700ms"
                            data-wow-duration="1500ms">
                            <Link to="/page-team" className="team__item-add">
                                <div className="team__image">
                                    <img src={TeamImage6} alt="image"/>
                                </div>
                                <i className="fa-light fa-arrow-up-right"></i>
                                <h3>BECOME <br/>
                                    OUR MEMBER</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);
}

export default TeamtHomeThree;
