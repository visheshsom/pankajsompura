// import React from 'react';
// import { Link } from 'react-router-dom';
// import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
// import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
// import PageTitle from '../PageTitle.jsx';
// import NewsDetailsImage from '../../assets/images/resource/news-details.jpg';
// import Thumb1 from '../../assets/images/resource/testi-1.jpg';
// import Thumb2 from '../../assets/images/resource/testi-2.jpg';
// import News1 from '../../assets/images/blog/blog-image1.jpg';
// import News2 from '../../assets/images/blog/blog-image2.jpg';
// import News3 from '../../assets/images/blog/blog-image3.jpg';

// function NewsDetails() {
//     return (
//         <>
//             <InnerPageHeader />
//             <PageTitle
//                 title="News Details"
//                 breadcrumb={[
//                     { link: '/', title: 'Home' },
//                     { li: '/news-details', title: 'News Details' },
//                 ]}
//             />
//             <section className="blog-details pt-120 pb-120">
//                 <div className="container">
//                     <div className="funfact__wrp">
//                         <div className="row">
//                             <div className="col-xl-8 col-lg-7">
//                                 <div className="blog-details__left">
//                                     <div className="blog-details__img">
//                                         <img src={NewsDetailsImage} alt="News Detail" />
//                                         <div className="blog-details__date">
//                                             <span className="day">28</span>
//                                             <span className="month">Aug</span>
//                                         </div>
//                                     </div>
//                                     <div className="blog-details__content">
//                                         <ul className="list-unstyled blog-details__meta">
//                                             <li><Link href="news-details"><i className="fas fa-user-circle"></i> Admin</Link></li>
//                                             <li><Link href="news-details"><i className="fas fa-comments"></i> 02 Comments</Link></li>
//                                         </ul>
//                                         <h3 className="blog-details__title">Delivering the best web design agency</h3>
//                                         <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
//                                         <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
//                                         <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
//                                     </div>
//                                     <div className="blog-details__bottom">
//                                         <p className="blog-details__tags"><span>Tags</span> <Link href="news-details">Business</Link> <Link href="news-details">Agency</Link></p>
//                                         <div className="blog-details__social-list">
//                                             <Link href="news-details"><i className="fab fa-twitter"></i></Link>
//                                             <Link href="news-details"><i className="fab fa-facebook"></i></Link>
//                                             <Link href="news-details"><i className="fab fa-pinterest-p"></i></Link>
//                                             <Link href="news-details"><i className="fab fa-instagram"></i></Link>
//                                         </div>
//                                     </div>
//                                     <div className="nav-links">
//                                         <div className="prev">
//                                             <Link href="news-details" rel="prev">Bring to the table win-win survival strategies</Link>
//                                         </div>
//                                         <div className="next">
//                                             <Link href="news-details" rel="next">How to lead a healthy &amp; well-balanced life</Link>
//                                         </div>
//                                     </div>
//                                     <div className="comment-one">
//                                         <h3 className="comment-one__title">2 Comments</h3>
//                                         <div className="comment-one__single">
//                                             <div className="comment-one__image"><img src={Thumb1} alt="Commenter 1" /></div>
//                                             <div className="comment-one__content">
//                                                 <h3>Kevin Martin</h3>
//                                                 <p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.</p>
//                                                 <Link href="news-details" className="theme-btn btn-two comment-one__btn"><span className="btn-title text-white">Reply</span></Link>
//                                             </div>
//                                         </div>
//                                         <div className="comment-one__single">
//                                             <div className="comment-one__image"><img src={Thumb2} alt="Commenter 2" /></div>
//                                             <div className="comment-one__content">
//                                                 <h3>Sarah Albert</h3>
//                                                 <p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.</p>
//                                                 <Link href="news-details" className="theme-btn btn-two comment-one__btn"><span className="btn-title text-white">Reply</span></Link>
//                                             </div>
//                                         </div>
//                                         <div className="comment-form">
//                                             <h3 className="comment-form__title mb-30">Leave a Comment</h3>
//                                             <form id="contact_form" name="contact_form" className="" action="includes/sendmail.php" method="post">
//                                                 <div className="row">
//                                                     <div className="col-sm-6">
//                                                         <div className="mb-3">
//                                                             <input name="form_name" className="form-control" type="text" placeholder="Enter Name" />
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-sm-6">
//                                                         <div className="mb-3">
//                                                             <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="mb-3">
//                                                     <textarea name="form_message" className="form-control required" rows="5" placeholder="Enter Message"></textarea>
//                                                 </div>
//                                                 <div className="mb-3">
//                                                     <input name="form_botcheck" className="form-control" type="hidden" value="" />
//                                                     <button type="submit" className="btn-one" data-loading-text="Please wait..."><span className="btn-title text-white">Submit Comment</span></button>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-4 col-lg-5">
//                                 <div className="sidebar">
//                                     <div className="sidebar__single sidebar__search">
//                                         <form action="#" className="sidebar__search-form">
//                                             <input type="search" placeholder="Search here" />
//                                             <button type="submit"><i className="far fa-search"></i></button>
//                                         </form>
//                                     </div>
//                                     <div className="sidebar__single sidebar__post">
//                                         <h3 className="sidebar__title">Latest Posts</h3>
//                                         <ul className="sidebar__post-list list-unstyled">
//                                             <li>
//                                                 <div className="sidebar__post-image"> <img src={News1} alt="Image 1"/> </div>
//                                                 <div className="sidebar__post-content">
//                                                     <h3> <span className="sidebar__post-content-meta"><i
//                                                         className="fas fa-user-circle"></i>Admin</span> <Link to="/news-details">Top crypto exchange influencers</Link>
//                                                     </h3>
//                                                 </div>
//                                             </li>
//                                             <li>
//                                                 <div className="sidebar__post-image"> <img src={News2} alt="Image 2"/> </div>
//                                                 <div className="sidebar__post-content">
//                                                     <h3> <span className="sidebar__post-content-meta"><i
//                                                         className="fas fa-user-circle"></i>Admin</span> <Link to="/news-details">Necessity may give us best virtual court</Link> </h3>
//                                                 </div>
//                                             </li>
//                                             <li>
//                                                 <div className="sidebar__post-image"> <img src={News3} alt="Image 3"/> </div>
//                                                 <div className="sidebar__post-content">
//                                                     <h3> <span className="sidebar__post-content-meta"><i
//                                                         className="fas fa-user-circle"></i>Admin</span> <Link to="/news-details">You should know about business plan</Link> </h3>
//                                                 </div>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <div className="sidebar__single sidebar__category">
//                                         <h3 className="sidebar__title">Categories</h3>
//                                         <ul className="sidebar__category-list list-unstyled">
//                                             <li><Link to="/news-details">Business<span
//                                                 className="icon-right-arrow"></span></Link> </li>
//                                             <li className="active"><Link to="/news-details">Digital Agency<span
//                                                 className="icon-right-arrow"></span></Link></li>
//                                             <li><Link to="/news-details">Introductions<span
//                                                 className="icon-right-arrow"></span></Link> </li>
//                                             <li><Link to="/news-details">New Technologies<span
//                                                 className="icon-right-arrow"></span></Link> </li>
//                                             <li><Link to="/news-details">Parallax Effects<span
//                                                 className="icon-right-arrow"></span></Link> </li>
//                                             <li><Link to="/news-details">Web Development<span
//                                                 className="icon-right-arrow"></span></Link> </li>
//                                         </ul>
//                                     </div>
//                                     <div className="sidebar__single sidebar__tags">
//                                         <h3 className="sidebar__title">Tags</h3>
//                                         <div className="sidebar__tags-list"> <a href="#">Consulting</a> <a href="#">Agency</a> <a href="#">Business</a> <a href="#">Digital</a> <a href="#">Experience</a> <a href="#">Technology</a> </div>
//                                     </div>
//                                     <div className="sidebar__single sidebar__comments">
//                                         <h3 className="sidebar__title">Recent Comments</h3>
//                                         <ul className="sidebar__comments-list list-unstyled">
//                                             <li>
//                                                 <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
//                                                 <div className="sidebar__comments-text-box">
//                                                     <p>A wordpress commenter on <br/>
//                                                         launch new mobile app
//                                                     </p>
//                                                 </div>
//                                             </li>
//                                             <li>
//                                                 <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
//                                                 <div className="sidebar__comments-text-box">
//                                                     <p> <span>John Doe</span> on template:</p>
//                                                     <h5>comments</h5>
//                                                 </div>
//                                             </li>
//                                             <li>
//                                                 <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
//                                                 <div className="sidebar__comments-text-box">
//                                                     <p>A wordpress commenter on <br/>
//                                                         launch new mobile app
//                                                     </p>
//                                                 </div>
//                                             </li>
//                                             <li>
//                                                 <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
//                                                 <div className="sidebar__comments-text-box">
//                                                     <p> <span>John Doe</span> on template:</p>
//                                                     <h5>comments</h5>
//                                                 </div>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <FooterHomeThree />
//         </>
//     );
// }

// export default NewsDetails;


import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import NewsDetailsImage from '../../assets/images/resource/kutcch.jpg';
import Thumb1 from '../../assets/images/resource/aayush.png';
import Thumb2 from '../../assets/images/resource/dhimant.png';
import News1 from '../../assets/images/blog/blog-image1.jpg';
import News2 from '../../assets/images/blog/blog-image2.jpg';
import News3 from '../../assets/images/blog/blog-image3.jpg';

function NewsDetails() {
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
                                    <div className="blog-details__img">
                                        <img src={NewsDetailsImage} alt="Sompura Temple Craftsmanship" />
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
                                        <p className="blog-details__text-2">• Precision alignment of 1444 marble pillars using Mandala Vinyasa<br/>
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
                                            <h3 className="comment-form__title mb-30">Initiate Shilpa Dialogue</h3>
                                            <form id="contact_form" name="contact_form" className="" action="includes/sendmail.php" method="post">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <input name="form_name" className="form-control" type="text" placeholder="Your Sanskrit Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <input name="form_email" className="form-control required email" type="email" placeholder="Vedic Institute/Organization" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <textarea name="form_message" className="form-control required" rows="5" placeholder="Share insights on Shilpa Prakarana"></textarea>
                                                </div>
                                                <div className="mb-3">
                                                    <input name="form_botcheck" className="form-control" type="hidden" value="" />
                                                    <button type="submit" className="btn-one" data-loading-text="Chanting Mantras..."><span className="btn-title text-white">Submit Parampara</span></button>
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