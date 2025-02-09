import React from 'react';
import {Link} from 'react-router-dom';
import TeamShapeImage from '../../assets/images/shape/team-five-shape.png';
import TeamIconImage from '../../assets/images/icon/five-start-icon.png';
import TeamImage1 from '../../assets/images/team/team-five-image1.png';
import TeamImage2 from '../../assets/images/team/team-five-image2.png';
import TeamImage3 from '../../assets/images/team/team-five-image3.png';
import TeamImage4 from '../../assets/images/team/team-five-image4.png';

function TeamHomeFive({ className }) {
return (
    <>
        <section className={`team-five-area pt-120 ${className || ''}`}>
            <div className="team-five__shape">
                <img src={TeamShapeImage} alt="shape"/>
            </div>
            <div className="container">
                <div className="team-five__wrp">
                    <div className="row g-4">
                        <div className="col-lg-5">
                            <div className="team-five__content">
                                <div className="section-header dark-area">
                                    <h3>Team</h3>
                                    <h2 className="wow splt-txt mb-40" data-splitting>Our awesome team members </h2>
                                    <p className="wow fadeInUp mt-0" data-wow-delay="200ms" data-wow-duration="1500ms">To explore and go after new ways to build, we’ve gathered the people, innovations, & partnerships that can anticipate & overcome new challenges. </p>
                                </div>
                                <div className="about-two__info d-flex align-items-center gap-3 mt-40 wow fadeInDown"
                                    data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <h2>4.20</h2>
                                    <div className="text-center">
                                        <img src={TeamIconImage} alt="icon"/>
                                        <h6 className="fw-600">2,500 Rating</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="team-five__item light-area have-margin">
                                        <div className="team-five__image">
                                            <img src={TeamImage1} alt="image"/>
                                            <div className="share">
                                                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath  ="url(#clip0_1_249)">
                                                        <path d="M3.04491 5.32409C1.45712 5.32409 0.169906 4.13224 0.169906 2.66204C0.169907 1.19184 1.45712 -1.95075e-07 3.04491 -1.25671e-07C4.63275 -5.62639e-08 5.91992 1.19184 5.91992 2.66204C5.91992 4.13224 4.63275 5.32409 3.04491 5.32409Z" fill="white" />
                                                        <path d="M9.125 10.6481C7.53718 10.6481 6.24998 9.45632 6.24998 7.98614C6.24998 6.51592 7.53718 5.3241 9.125 5.3241C10.7128 5.3241 12 6.51592 12 7.98614C12 9.45632 10.7128 10.6481 9.125 10.6481Z" fill="white" />
                                                        <path d="M2.87499 15.8162C1.28715 15.8162 -1.63931e-05 14.6244 -1.63288e-05 13.1542C-1.62646e-05 11.684 1.28715 10.4922 2.87499 10.4922C4.46278 10.4922 5.75 11.684 5.75 13.1542C5.75 14.6244 4.46278 15.8162 2.87499 15.8162Z" fill="white" />
                                                        <path d="M5.74973 7.82898C5.74973 6.01253 3.61493 5.40182 2.79754 5.32355L5.83431 2.51172C5.91888 3.26857 6.64608 5.26089 8.87842 5.32355C9.01372 9.64542 8.9348 10.6737 8.87842 10.6476C6.51077 10.5224 5.80613 12.7287 5.74973 13.616L2.79754 10.491C3.61493 10.3605 5.74973 9.64542 5.74973 7.82898Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath>
                                                            <rect width="16" height="12" fill="white" transform="translate(12) rotate(90)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="socials">
                                                    <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                                                    <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                                    <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                                    <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h3 className="mb-2"><Link className="primary-hover" to="/page-team-details">Nazmuj Sakib</Link></h3>
                                            <span>Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="team-five__item light-area">
                                        <div className="team-five__image">
                                            <img src={TeamImage2} alt="image"/>
                                            <div className="share">
                                                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath  ="url(#clip0_1_249)">
                                                        <path d="M3.04491 5.32409C1.45712 5.32409 0.169906 4.13224 0.169906 2.66204C0.169907 1.19184 1.45712 -1.95075e-07 3.04491 -1.25671e-07C4.63275 -5.62639e-08 5.91992 1.19184 5.91992 2.66204C5.91992 4.13224 4.63275 5.32409 3.04491 5.32409Z" fill="white" />
                                                        <path d="M9.125 10.6481C7.53718 10.6481 6.24998 9.45632 6.24998 7.98614C6.24998 6.51592 7.53718 5.3241 9.125 5.3241C10.7128 5.3241 12 6.51592 12 7.98614C12 9.45632 10.7128 10.6481 9.125 10.6481Z" fill="white" />
                                                        <path d="M2.87499 15.8162C1.28715 15.8162 -1.63931e-05 14.6244 -1.63288e-05 13.1542C-1.62646e-05 11.684 1.28715 10.4922 2.87499 10.4922C4.46278 10.4922 5.75 11.684 5.75 13.1542C5.75 14.6244 4.46278 15.8162 2.87499 15.8162Z" fill="white" />
                                                        <path d="M5.74973 7.82898C5.74973 6.01253 3.61493 5.40182 2.79754 5.32355L5.83431 2.51172C5.91888 3.26857 6.64608 5.26089 8.87842 5.32355C9.01372 9.64542 8.9348 10.6737 8.87842 10.6476C6.51077 10.5224 5.80613 12.7287 5.74973 13.616L2.79754 10.491C3.61493 10.3605 5.74973 9.64542 5.74973 7.82898Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath> <rect width="16" height="12" fill="white" transform="translate(12) rotate(90)" /> </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="socials">
                                                    <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                                                    <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                                    <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                                    <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h3 className="mb-2"><Link className="primary-hover" to="/page-team-details">Moeen Khan</Link></h3>
                                            <span>Student</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="team-five__item light-area have-margin">
                                        <div className="team-five__image">
                                            <img src={TeamImage3} alt="image"/>
                                            <div className="share">
                                                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath  ="url(#clip0_1_249)">
                                                        <path d="M3.04491 5.32409C1.45712 5.32409 0.169906 4.13224 0.169906 2.66204C0.169907 1.19184 1.45712 -1.95075e-07 3.04491 -1.25671e-07C4.63275 -5.62639e-08 5.91992 1.19184 5.91992 2.66204C5.91992 4.13224 4.63275 5.32409 3.04491 5.32409Z" fill="white" />
                                                        <path d="M9.125 10.6481C7.53718 10.6481 6.24998 9.45632 6.24998 7.98614C6.24998 6.51592 7.53718 5.3241 9.125 5.3241C10.7128 5.3241 12 6.51592 12 7.98614C12 9.45632 10.7128 10.6481 9.125 10.6481Z" fill="white" />
                                                        <path d="M2.87499 15.8162C1.28715 15.8162 -1.63931e-05 14.6244 -1.63288e-05 13.1542C-1.62646e-05 11.684 1.28715 10.4922 2.87499 10.4922C4.46278 10.4922 5.75 11.684 5.75 13.1542C5.75 14.6244 4.46278 15.8162 2.87499 15.8162Z" fill="white" />
                                                        <path d="M5.74973 7.82898C5.74973 6.01253 3.61493 5.40182 2.79754 5.32355L5.83431 2.51172C5.91888 3.26857 6.64608 5.26089 8.87842 5.32355C9.01372 9.64542 8.9348 10.6737 8.87842 10.6476C6.51077 10.5224 5.80613 12.7287 5.74973 13.616L2.79754 10.491C3.61493 10.3605 5.74973 9.64542 5.74973 7.82898Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath>
                                                            <rect width="16" height="12" fill="white" transform="translate(12) rotate(90)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="socials">
                                                    <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                                                    <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                                    <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                                    <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h3 className="mb-2"><Link className="primary-hover" to="/page-team-details">Rahat Hayder</Link></h3>
                                            <span>HR Neuro</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="team-five__item light-area">
                                        <div className="team-five__image">
                                            <img src={TeamImage4} alt="image"/>
                                            <div className="share">
                                                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath  ="url(#clip0_1_249)">
                                                        <path d="M3.04491 5.32409C1.45712 5.32409 0.169906 4.13224 0.169906 2.66204C0.169907 1.19184 1.45712 -1.95075e-07 3.04491 -1.25671e-07C4.63275 -5.62639e-08 5.91992 1.19184 5.91992 2.66204C5.91992 4.13224 4.63275 5.32409 3.04491 5.32409Z" fill="white" />
                                                        <path d="M9.125 10.6481C7.53718 10.6481 6.24998 9.45632 6.24998 7.98614C6.24998 6.51592 7.53718 5.3241 9.125 5.3241C10.7128 5.3241 12 6.51592 12 7.98614C12 9.45632 10.7128 10.6481 9.125 10.6481Z" fill="white" />
                                                        <path d="M2.87499 15.8162C1.28715 15.8162 -1.63931e-05 14.6244 -1.63288e-05 13.1542C-1.62646e-05 11.684 1.28715 10.4922 2.87499 10.4922C4.46278 10.4922 5.75 11.684 5.75 13.1542C5.75 14.6244 4.46278 15.8162 2.87499 15.8162Z" fill="white" />
                                                        <path d="M5.74973 7.82898C5.74973 6.01253 3.61493 5.40182 2.79754 5.32355L5.83431 2.51172C5.91888 3.26857 6.64608 5.26089 8.87842 5.32355C9.01372 9.64542 8.9348 10.6737 8.87842 10.6476C6.51077 10.5224 5.80613 12.7287 5.74973 13.616L2.79754 10.491C3.61493 10.3605 5.74973 9.64542 5.74973 7.82898Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath>
                                                            <rect width="16" height="12" fill="white" transform="translate(12) rotate(90)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="socials">
                                                    <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                                                    <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                                    <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                                    <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h3 className="mb-2"><Link className="primary-hover" to="/page-team-details">Kawser Ahmed</Link></h3>
                                            <span>CEO Neuro</span>
                                        </div>
                                    </div>
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

export default TeamHomeFive;
