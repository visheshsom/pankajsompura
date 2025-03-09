import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import '../../assets/css/protection.css';
import ServiceD1Image from '../../assets/images/resource/supervision2.png';
import ServiceD2Image from '../../assets/images/resource/temple_front.png';

// Define secure image URLs
const BACKEND_URL = 'http://localhost:5001';
const secureImages = {
    serviceDetails: `${BACKEND_URL}/api/images/ServiceDetails.jpg`,
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
};

// CSS for the container to prevent right-click
const secureContainerStyle = {
    position: 'relative',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
};

function ServicesDetails() {
    const [showQues, setQues] = useState(1);
    
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

    const openQuestion = (value) => {
        setQues(value);
    };

    return (
        <>
            <InnerPageHeader />
            <PageTitle
                title="Sacred Shilpa Services"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { li: '/service-details', title: 'Services Details' },
                ]}
            />

            <section className="services-details position-relative overflow-hidden pt-120 pb-120">
                <div className="container">
                    <div className="offer__wrp">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4">
                                <div className="service-sidebar">
                                    <div className="sidebar-widget service-sidebar-single">
                                        <div className="sidebar-service-list">
                                            <ul>
                                                <li><Link to="/jain-temples" className="current"><i className="fas fa-angle-right"></i><span>Jain Tirthankara Temples</span></Link></li>
                                                <li className="current"><Link to="/hindu-sanctums"><i className="fas fa-angle-right"></i><span>Hindu Deity Sanctums</span></Link></li>
                                                <li><Link to="/mandala-design"><i className="fas fa-angle-right"></i><span>Mandala Blueprints</span></Link></li>
                                                <li><Link to="/temple-restoration"><i className="fas fa-angle-right"></i><span>Divine Restoration</span></Link></li>
                                                <li><Link to="/monumental-structures"><i className="fas fa-angle-right"></i><span>Monumental Shilpa</span></Link></li>
                                                <li><Link to="/shilpa-consultancy"><i className="fas fa-angle-right"></i><span>Shilp Shastra Consultancy</span></Link></li>
                                            </ul>
                                        </div>

                                        <div className="service-details-help">
                                            <div className="help-shape-1"></div>
                                            <div className="help-shape-2"></div>
                                            <h2 className="help-title">Seek Guidance for<br/> Temple<br/> Constructions</h2>
                                            <div className="help-icon">
                                                <span className="fa-regular fa-om"></span>
                                            </div>
                                            <div className="help-contact">
                                                <p>Consult with Architect</p>
                                                <Link to="/tel:+911234567890">(+91) 98251 66726</Link>
                                            </div>
                                        </div>

                                        <div className="sidebar-widget service-sidebar-single mt-4">
                                            <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                                                <Link to="#" className="theme-btn btn-two d-grid">
                                                    <span className="btn-title text-white">
                                                        <span className="fas fa-file-pdf"></span> Download Shilpa Prakarana
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-8 col-lg-8">
                                <div className="services-details__content position-relative overflow-hidden px-3">
                                    <div className="protected-container" style={secureContainerStyle}>
                                        <img 
                                            className="w-100 protected-image" 
                                            src={secureImages.serviceDetails} 
                                            alt="Sompura Temple Architecture"
                                            style={secureImageStyle}
                                            draggable="false"
                                        />
                                    </div>
                                    <h3 className="mt-4">Sompura Shilpakala: Guardians of Sacred Geometry</h3>
                                    <p style={{ marginBottom: '1.5rem' }}>For five centuries, our lineage has specialized in Vedic temple architecture following ancient Shilp Shastra principles. We create living embodiments of cosmic order through:</p>
                                    <div style={{ paddingLeft: '0.5rem' }}>
                                        <div style={{ display: 'flex', margin: '0.5rem 0' }}>
                                            <div style={{ minWidth: '1.5rem', fontWeight: 'bold', color: '#000' }}>1.</div>
                                            <div>Precision-carved Chaumukha designs for Jain derasars</div>
                                        </div>
                                        <div style={{ display: 'flex', margin: '0.5rem 0' }}>
                                            <div style={{ minWidth: '1.5rem', fontWeight: 'bold', color: '#000' }}>2.</div>
                                            <div>Nagara & Dravida style Hindu sanctums aligned with deity energy flows</div>
                                        </div>
                                        <div style={{ display: 'flex', margin: '0.5rem 0' }}>
                                            <div style={{ minWidth: '1.5rem', fontWeight: 'bold', color: '#000' }}>3.</div>
                                            <div>Mandala-based Vastupurusha layouts using Māna Lakshana measurements</div>
                                        </div>
                                        <div style={{ display: 'flex', margin: '0.5rem 0' }}>
                                            <div style={{ minWidth: '1.5rem', fontWeight: 'bold', color: '#000' }}>4.</div>
                                            <div>Ritually consecrated stone selection and carving techniques</div>
                                        </div>
                                    </div>                                                           
                                    <div className="content mt-40">
                                        <div className="text">
                                            <h3>Architect Supervision</h3>
                                            <p>Our karma kand execution ensures Agamic compliance from foundation to finial:</p>
                                            <blockquote className="blockquote-one">
                                                "From Adhisthana base to Shikhara spire - every element follows Shilparatna guidelines"
                                            </blockquote>
                                        </div>
                                        <div className="feature-list mt-4">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                    <img className="mb-3 w-100" src={ServiceD1Image} alt="Jain Derasar Complex" />
                                                    <h5>Jain Temple Specialties</h5>
                                                    <ul>
                                                        <li>Manastambha alignment for introspection</li>
                                                        <li>Samosharana enlightenment pavilions</li>
                                                        <li>Gajathara motif stonework</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                    <img className="mb-3 w-100" src={ServiceD2Image} alt="Hindu Temple Shikhara" />
                                                    <h5>Hindu Temple Elements</h5>
                                                    <ul>
                                                        <li>Kirti Stambha victory pillars</li>
                                                        <li>Nandi Mandapa sacred bull pavilions</li>
                                                        <li>Prakara circumambulatory corridors</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="innerpage mt-25">
                                        <h3>Shilpa Shastra Insights</h3>
                                        <p>Answers to common queries about our temple construction philosophy:</p>
                                        <ul className="accordion-box mt-30 wow fadeInRight">
                                            <li onClick={() => openQuestion(1)} className={`accordion block ${showQues === 1 ? 'active-block' : ''}`}>
                                                <div className={`acc-btn ${showQues === 1 ? 'active' : ''}`}>
                                                    How do you maintain Shilp Shastra compliance?
                                                    <div className="icon fa fa-angle-down"></div>
                                                </div>
                                                <div className={`acc-content ${showQues === 1 ? 'current' : ''}`}>
                                                    <div className="content">
                                                        <div className="text">Through our Design Fidelity Framework™: 1) Ayadi Sutra calculations 2) Māna Lakshana proportioning 3) Shilpa Prakriya material selection 4) Pratima Lakshana iconometry</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li onClick={() => openQuestion(2)} className={`accordion block ${showQues === 2 ? 'active-block' : ''}`}>
                                                <div className={`acc-btn ${showQues === 2 ? 'active' : ''}`}>
                                                    What distinguishes Jain vs Hindu temple architecture?
                                                    <div className="icon fa fa-angle-down"></div>
                                                </div>
                                                <div className={`acc-content ${showQues === 2 ? 'current' : ''}`}>
                                                    <div className="content">
                                                        <div className="text">Jain temples emphasize symmetry/asymmetry balance (Syādvāda) with Manastambha pillars, while Hindu temples follow deity-specific Vastupurusha Mandala energy flows with distinct shikhara/gopuram structures.</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li onClick={() => openQuestion(3)} className={`accordion block ${showQues === 3 ? 'active-block' : ''}`}>
                                                <div className={`acc-btn ${showQues === 3 ? 'active' : ''}`}>
                                                    Your restoration philosophy?
                                                    <div className="icon fa fa-angle-down"></div>
                                                </div>
                                                <div className={`acc-content ${showQues === 3 ? 'current' : ''}`}>
                                                    <div className="content">
                                                        <div className="text">"Replace only what time destroyed - never alter what our ancestors perfected." We use traditional Shilpa Putika techniques with original Tala Mana proportions for authentic renewal.</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default ServicesDetails;