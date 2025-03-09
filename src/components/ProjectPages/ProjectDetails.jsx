import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import '../../assets/css/protection.css';

// Define secure image URLs
const BACKEND_URL = 'http://localhost:5001';
const secureImages = {
    shikharji: `${BACKEND_URL}/api/images/Shikharji.jpg`,
};

// CSS to prevent image interactions
const secureImageStyle = {
    pointerEvents: 'none',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    WebkitTouchCallout: 'none',
    draggable: false,
    WebkitUserDrag: 'none',
    KhtmlUserDrag: 'none',
    MozUserDrag: 'none',
    OUserDrag: 'none',
    width: '70%',
    height: 'auto'
};

// CSS for the container to prevent right-click
const secureContainerStyle = {
    position: 'relative',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    textAlign: 'center'
};

function ProjectDetails() {
    useEffect(() => {
        // Add protection to images after they load
        const images = document.querySelectorAll('.protected-image');
        const containers = document.querySelectorAll('.protected-container');

        const preventActions = (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };

        // Add multiple event listeners to both images and their containers
        [...images, ...containers].forEach(element => {
            element.addEventListener('contextmenu', preventActions, true);
            element.addEventListener('dragstart', preventActions, true);
            element.addEventListener('mousedown', preventActions, true);
            element.addEventListener('touchstart', preventActions, true);
            element.addEventListener('copy', preventActions, true);
            element.addEventListener('cut', preventActions, true);
            element.addEventListener('paste', preventActions, true);
            element.addEventListener('selectstart', preventActions, true);
        });

        // Global right-click prevention for protected areas
        const handleGlobalRightClick = (e) => {
            if (e.target.closest('.protected-container')) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        };

        document.addEventListener('contextmenu', handleGlobalRightClick, true);

        return () => {
            [...images, ...containers].forEach(element => {
                element.removeEventListener('contextmenu', preventActions, true);
                element.removeEventListener('dragstart', preventActions, true);
                element.removeEventListener('mousedown', preventActions, true);
                element.removeEventListener('touchstart', preventActions, true);
                element.removeEventListener('copy', preventActions, true);
                element.removeEventListener('cut', preventActions, true);
                element.removeEventListener('paste', preventActions, true);
                element.removeEventListener('selectstart', preventActions, true);
            });
            document.removeEventListener('contextmenu', handleGlobalRightClick, true);
        };
    }, []);

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
                                    <div className="project-details__img protected-container" style={secureContainerStyle}> 
                                        <img 
                                            src={secureImages.shikharji} 
                                            alt="Image" 
                                            className="protected-image"
                                            style={secureImageStyle}
                                            draggable="false"
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