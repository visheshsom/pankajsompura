import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';

// Import images
import projectDetailsImage from '../../assets/images/resource/Shikharji.png';


function ProjectDetails() {
    return (
        <>
            <InnerPageHeader />
            <PageTitle
                title="Project Details"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { li: '/Project-details', title: 'Project Details' },
                ]}
            />

            <section className="project-details pt-120 pb-120">
                <div className="container">
                    <div className="project-two__wrp">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="project-details__top">
                                    <div className="project-details__img" style={{ textAlign: 'center' }}> 
                                        <img 
                                            src={projectDetailsImage} 
                                            alt="Image" 
                                            style={{ width: '70%', height: 'auto' }}
                                        /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="project-details__content-right">
                                    <div className="project-details__details-box pb-30">
                                        <div className="row">
                                            <div className="col-6 col-md-3">
                                                <p className="project-details__client">Date</p>
                                                <h4 className="project-details__name">15 April, 2008</h4>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <p className="project-details__client">Client</p>
                                                <h4 className="project-details__name">Sammet Shikharji Taleti Trust</h4>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <p className="project-details__client">Website</p>
                                                <h4 className="project-details__name"><a href="https://www.instagram.com/taletitirth/?hl=en" target="_blank">Taletitirth</a></h4>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <p className="project-details__client">Location</p>
                                                <h4 className="project-details__name">Madhuban, Jharkhand, India</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-details__content">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="project-details__content-left">
                                        <h3 className="mb-4 mt-5">Here to Know About This Project</h3>
                                        <p className="">The main temple is built over a violin-shaped center in the middle of a 15,000 square feet lake. 
                                            4 bridges from each direction provide access to the main temple which has an unobstructed view from all directions.
                                            24 temples for each Tirthankar surround the main temple that spans over 30,000 square feet. </p>

                                        <p className="">The idol situated in Gumbaj temple is of special importance due to its detailed art work. A gentle slope created alongside stairs for each of the 4 temple entrances ensures the monument is easily accessible for elderly and disabled visitors also.</p>

                                        <p className="">Lifelike monuments and idols constructed in the temples with intricate artwork are one of a kind. 25 unique designs have been used for each of the temples ensuring there is no repetition of art work or design.</p>

                                        <p className="">Unique planning and placement of the individual temples ensures that 'Pradakshina' and 'Nauka Pradakshina' can be done of the main temple and individual 24 Tirthankar temples as well.</p>

                                        <p className="mb-5">Construction and planning done on the grandest scale combined with the most intricate artwork and attention to detail to the smallest carving make Shri Samed Shikhar Tirth temple a must see monument.</p>

                                        <ul className="list-style-two mb-0">
                                            <li><i className="fa fa-check-circle"></i> 3,00,000 cubic feet of white marble has been used to construct this glorious monument</li>
                                            <li><i className="fa fa-check-circle"></i> Spread over 1,10,600 square feet, Shri Samed Shikhar Tirth temple is one of the largest Jain temple in the world.</li>
                                            <li><i className="fa fa-check-circle"></i> 4 entrances to the temple from each direction provide a grand view of this marble construction.</li>
                                            
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="project-details__pagination-box">
                                    <ul className="project-details__pagination list-unstyled clearfix">
                                        <li className="next">
                                            <div className="icon"> <Link to="#" aria-label="Previous"><i className="far fa-arrow-left"></i></Link> </div>
                                            <div className="content">Previous</div>
                                        </li>
                                        <li><Link to="#"></Link></li>
                                        <li><Link to="#"></Link></li>
                                        <li><Link to="#"></Link></li>
                                        <li><Link to="#"></Link></li>
                                        <li className="previous">
                                            <div className="content">Next</div>
                                            <div className="icon"> <Link to="#" aria-label="Previous"><i className="far fa-arrow-right"></i></Link> </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterHomeThree />
        </>
    );
}

export default ProjectDetails;