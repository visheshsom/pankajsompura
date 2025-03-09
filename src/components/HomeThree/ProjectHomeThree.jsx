import React from 'react';
import { Link } from 'react-router-dom';
import Projectimage1 from '../../assets/images/project/project-two-image1.jpg';
import Projectimage2 from '../../assets/images/project/project-two-image2.jpg';
import Projectimage3 from '../../assets/images/project/project-two-image3.jpg';
import Projectimage4 from '../../assets/images/project/project-two-image4.jpg';




function ProjectHomeThree({ className }) {
return (
<>
        <section className={`project-three-area pt-120 pb-120 ${className || ''}`}>
            <div className="container">
                <div className="project-two__wrp">
                    <div className="section-header text-center mb-50">
                        <h2 className="wow splt-txt" data-splitting>Our Prominent Project</h2>
                        <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium dolo <br /> remque laudantium. Neque porroqui squam est, quido lorem</p>
                    </div>
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="project-two__item">
                                <div className="project-two__image">
                                    <Link to="/page-project-details" className="wow imageUpToDown"> <img src={Projectimage1} alt="image"/></Link>
                                </div>
                                <div className="project-three__content mt-25">
                                    <h5><Link to="/page-project-details">RESTAURANT</Link></h5>
                                    <span>Lifestyle</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-two__item-sm float-end">
                                <div className="project-two__image">
                                    <Link to="/page-project-details" className="wow imageUpToDown"><img src={Projectimage2} alt="image"/></Link>
                                </div>
                                <div className="project-three__content mt-25">
                                    <h5><Link to="/page-project-details">INTERIOR</Link></h5>
                                    <span>Lifestyle</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 align-items-center mt-60">
                        <div className="col-lg-6">
                            <div className="project-two__item-sm">
                                <div className="project-two__image">
                                    <Link to="/page-project-details" className="wow imageUpToDown"><img src={Projectimage3} alt="image"/></Link>
                                </div>
                                <div className="project-three__content mt-25">
                                    <h5><Link to="/page-project-details">DESIGN HOME</Link></h5>
                                    <span>Lifestyle</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-two__item">
                                <div className="project-two__image">
                                    <Link to="/page-project-details" className="wow imageUpToDown"><img src={Projectimage4} alt="image"/></Link>
                                </div>
                                <div className="project-three__content mt-25">
                                    <h5><Link to="/page-project-details">MY PLACE</Link></h5>
                                    <span>Living Rooms</span>
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

export default ProjectHomeThree;