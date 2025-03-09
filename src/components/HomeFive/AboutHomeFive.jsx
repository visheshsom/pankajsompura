import React from 'react';
import {Link} from 'react-router-dom';
import AboutShapeimage1 from '../../assets/images/shape/about-five-shape.png';
import Aboutimage1 from '../../assets/images/about/about-five-image.jpg';
import Aboutimage2 from '../../assets/images/about/about-five-image2.jpg';


function AboutHomeFive({ className }) {
    return (
        <>
        <section className={`about-five-area pb-120 ${className || ""}`}>
            <div className="about-five__shape">
                <img src={AboutShapeimage1} alt="shape"/>
            </div>
            <div className="container">
                <div className="about-five__wrp">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <div className="about-five__image">
                                <figure className="wow imageLeftToRight gsap__parallax">
                                    <img src={Aboutimage1} alt="image"/>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-five__content">
                                <h2 className="mb-40 wow splt-txt" data-splitting>Interior Design</h2>
                                <p>“Outstanding experience with Law Company! Friendly staff, impeccable law Highly recommend for a memorable.’’</p>
                                <div className="mt-20">
                                    <h5 className="text-black">Leslie Alexander</h5>
                                    <span>CEO & Owner</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-five__content-bottom">
                                <h3>ABOUT US</h3>
                                <h2 className="wow splt-txt" data-splitting>Our purpose is to assist your Daily lifetime </h2>
                                <div className="line"></div>
                                <p>With the largest fleet of luxury catamarans, sailing and motor yachts in Santorini we guarantee the ultimate sailing experience! </p>
                                <Link to="/page-about" className="btn-one mt-40">READ MORE</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-five__image have-margin">
                                <figure className="wow imageRightToLeft gsap__parallax">
                                    <img src={Aboutimage2} alt="image"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default AboutHomeFive;
