import React from 'react';
import { Link } from 'react-router-dom';
// Importing the image files
import ProjectImage1 from '../../assets/images/project/project-two-image1.jpg';
import ProjectImage2 from '../../assets/images/project/project-two-image2.jpg';
import ProjectImage3 from '../../assets/images/project/project-two-image3.jpg';
import ProjectImage4 from '../../assets/images/project/project-two-image4.jpg';



function Project() {
    return (
        <>
	<section className="project-three-area pt-120 pb-120">
        <div className="container">
            <div className="project-two__wrp">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="project-two__item">
                            <div className="project-two__image">
                                <Link to="/page-project-details" className="wow imageUpToDown"><img src={ProjectImage1} alt="image"/></Link>
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
                                <Link to="/page-project-details" className="wow imageUpToDown"><img src={ProjectImage2} alt="image"/></Link>
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
                                <Link to="/page-project-details" className="wow imageUpToDown"><img src={ProjectImage3} alt="image"/></Link>
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
                                <Link to="/page-project-details" className="wow imageUpToDown"><img src={ProjectImage4} alt="image"/></Link>
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

export default Project;
