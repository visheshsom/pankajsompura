import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import '../../assets/css/protection.css';
// import NewsDetailsImage from '../../assets/images/resource/kutcch.jpg';
import Thumb1 from '../../assets/images/resource/aayush.png';
import Thumb2 from '../../assets/images/resource/dhimant.png';
import News1 from '../../assets/images/blog/blog-image1.jpg';
import News2 from '../../assets/images/blog/blog-image2.jpg';
import News3 from '../../assets/images/blog/blog-image3.jpg';

// Define secure image URLs
const BACKEND_URL = 'http://localhost:5001';
const secureImages = {
    newsDetails: `${BACKEND_URL}/api/images/kutcch.jpg`,
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

function NewsDetails() {
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
                title="Sacred Shilpa Insights"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { li: '/news-details', title: 'Architectural Wisdom' },
                ]}
            />
            <section className="blog-details pt-120 pb-120">
                <div className="container">
                    <div className="funfact__wrp">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="blog-details__left">
                                    <div className="blog-details__img protected-container" style={secureContainerStyle}>
                                        <img 
                                            src={secureImages.newsDetails} 
                                            alt="Sompura Temple Craftsmanship"
                                            className="protected-image"
                                            style={secureImageStyle}
                                            draggable="false"
                                        />
                                        <div className="blog-details__date">
                                            <span className="day">12</span>
                                            <span className="month">Mar</span>
                                        </div>
                                    </div>
                                    <div className="blog-details__content">
                                        <ul className="list-unstyled blog-details__meta">
                                            <li><Link href="news-details"><i className="fas fa-dharmachakra"></i> Sthapati</Link></li>
                                            <li><Link href="news-details"><i className="fas fa-comments"></i> 05 Shastrarth</Link></li>
                                        </ul>
                                        <h3 className="blog-details__title">Preserving Sacred Geometry: The Sompura Shilpakala Tradition</h3>
                                        <p className="blog-details__text-2">For over five centuries, the Sompura community has safeguarded the ancient principles of Shilp Shastra in temple architecture. Our latest project at the Ranakpur Jain Temple complex demonstrates the enduring relevance of Vedic mathematics in stone:</p>
                                        <p className="blog-details__text-2">
                                        • Precision alignment of 1444 marble pillars using Mandala Vinyasa<br/>
                                        • Application of Ayadi calculations for cosmic energy flow<br/>
                                        • Restoration of Chaumukha Adhisthana following 12th-century Agama texts</p>
                                        <p className="blog-details__text-2">The recent discovery of 15th-century Shilpa Prakarana manuscripts has revolutionized our understanding of Tirthankara murti proportions. These texts validate our community's oral traditions regarding Iconometry (Pratimā Lakshana) and stone selection rituals (Shilpa Sankalpa).</p>
                                    </div>
                                    <div className="blog-details__bottom">
                                        <p className="blog-details__tags"><span>Shastra Tags</span> 
                                            <Link href="news-details">Vastupurusha Mandala</Link> 
                                            <Link href="news-details">Māna Lakshana</Link>
                                        </p>
                                        <div className="blog-details__social-list">
                                            <Link href="news-details"><i className="fab fa-whatsapp"></i></Link>
                                            <Link href="news-details"><i className="fas fa-scroll"></i></Link>
                                            <Link href="news-details"><i className="fab fa-youtube"></i></Link>
                                        </div>
                                    </div>
                                    <div className="nav-links">
                                        <div className="prev">
                                            <Link href="news-details" rel="prev">Reviving Chalukyan Temple Architecture</Link>
                                        </div>
                                        <div className="next">
                                            <Link href="news-details" rel="next">Modern Challenges in Sacred Stonework</Link>
                                        </div>
                                    </div>
                                    <div className="comment-one">
                                        <h3 className="comment-one__title">Shastrarth Discussions</h3>
                                        <div className="comment-one__single">
                                            <div className="comment-one__image"><img src={Thumb1} alt="Scholar Aditya" /></div>
                                            <div className="comment-one__content">
                                                <h3>Aayush Patel</h3>
                                                <p>"The recent use of 3D photogrammetry in documenting eroded Koshta panels at Dilwara Temples showcases perfect harmony between tradition and technology. However, the Māna Lakshana proportions must remain inviolate."</p>
                                                <Link href="news-details" className="theme-btn btn-two comment-one__btn"><span className="btn-title text-white">Respond</span></Link>
                                            </div>
                                        </div>
                                        <div className="comment-one__single">
                                            <div className="comment-one__image"><img src={Thumb2} alt="Architect Priya" /></div>
                                            <div className="comment-one__content">
                                                <h3>Dhimant Vyas</h3>
                                                <p>"Your team's work on the Sammet Shikhar Design and Execution has set new benchmarks in Jain Community. The rotating pillars for solstice illumination was particularly inspired!"</p>
                                                <Link href="news-details" className="theme-btn btn-two comment-one__btn"><span className="btn-title text-white">Respond</span></Link>
                                            </div>
                                        </div>
                                        <div className="comment-form">
                                            <h3 className="comment-form__title mb-30">Initiate Dialogue</h3>
                                            <form id="contact_form" name="contact_form" className="" action="includes/sendmail.php" method="post">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <input name="form_name" className="form-control" type="text" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <input name="form_email" className="form-control required email" type="email" placeholder="Institute/Organization" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <textarea name="form_message" className="form-control required" rows="5" placeholder="Share insights on Shilpa Shastra"></textarea>
                                                </div>
                                                <div className="mb-3">
                                                    <input name="form_botcheck" className="form-control" type="hidden" value="" />
                                                    <button type="submit" className="btn-one" data-loading-text="Chanting Mantras..."><span className="btn-title text-white">Submit</span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar">
                                    <div className="sidebar__single sidebar__search">
                                        <form action="#" className="sidebar__search-form">
                                            <input type="search" placeholder="Search Shilpa Shastra..." />
                                            <button type="submit"><i className="far fa-veda"></i></button>
                                        </form>
                                    </div>
                                    <div className="sidebar__single sidebar__post">
                                        <h3 className="sidebar__title">Recent Shilpa Prakarana</h3>
                                        <ul className="sidebar__post-list list-unstyled">
                                            <li>
                                                <div className="sidebar__post-image"> <img src={News1} alt="Jain Vimana"/> </div>
                                                <div className="sidebar__post-content">
                                                    <h3> <span className="sidebar__post-content-meta"><i
                                                        className="fas fa-om"></i>Acharya</span> <Link to="/news-details">Tirthankara Murti Proportions in Digambara Tradition</Link>
                                                    </h3>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__post-image"> <img src={News2} alt="Stone Carving"/> </div>
                                                <div className="sidebar__post-content">
                                                    <h3> <span className="sidebar__post-content-meta"><i
                                                        className="fas fa-om"></i>Sthapati</span> <Link to="/news-details">Ashtadhatu Alloy Applications in Kalasha Construction</Link> </h3>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__post-image"> <img src={News3} alt="Temple Layout"/> </div>
                                                <div className="sidebar__post-content">
                                                    <h3> <span className="sidebar__post-content-meta"><i
                                                        className="fas fa-om"></i>Shilpi</span> <Link to="/news-details">Mandala Vinyasa in Contemporary Temple Complexes</Link> </h3>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__single sidebar__category">
                                        <h3 className="sidebar__title">Agama Categories</h3>
                                        <ul className="sidebar__category-list list-unstyled">
                                            <li><Link to="/news-details">Jain Derasar Architecture<span
                                                className="icon-dharmachakra"></span></Link> </li>
                                            <li className="active"><Link to="/news-details">Nagara Shikhara<span
                                                className="icon-shiva"></span></Link></li>
                                            <li><Link to="/news-details">Vimana Restoration<span
                                                className="icon-lotus"></span></Link> </li>
                                            <li><Link to="/news-details">Shilpa Manuscripts<span
                                                className="icon-scroll"></span></Link> </li>
                                            <li><Link to="/news-details">Consecration Rituals<span
                                                className="icon-om"></span></Link> </li>
                                            <li><Link to="/news-details">Sacred Material Science<span
                                                className="icon-stone"></span></Link> </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__single sidebar__tags">
                                        <h3 className="sidebar__title">Shastra Tags</h3>
                                        <div className="sidebar__tags-list"> 
                                            <Link to="#">Prasada Vinyasa</Link> 
                                            <Link to="#">Ayadi Calculations</Link> 
                                            <Link to="#">Murti Sthapana</Link> 
                                            <Link to="#">Shilpa Ratna</Link> 
                                            <Link to="#">Panchaloha</Link> 
                                            <Link to="#">Kumbhabhishekam</Link> 
                                        </div>
                                    </div>
                                    <div className="sidebar__single sidebar__comments">
                                        <h3 className="sidebar__title">Recent Parampara</h3>
                                        <ul className="sidebar__comments-list list-unstyled">
                                            <li>
                                                <div className="sidebar__comments-icon"> <i className="fas fa-scroll"></i> </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p>Shilpi commentary on<br/>
                                                        Vastu Sarasamgraha verses
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments-icon"> <i className="fas fa-university"></i> </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p> <span>Acharya Gupta</span> on:<br/>
                                                        <h5>Manasara Measurements</h5>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments-icon"> <i className="fas fa-landmark"></i> </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p>Discussion regarding<br/>
                                                        Ellora Cave alignments
                                                    </p>
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
        </>
    );
}

export default NewsDetails;