import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import TeamShapeImg from '../../assets/images/shape/team-five-shape.png';
import TeamImg1 from '../../assets/images/team/IMG_7921.png';
import TeamImg2 from '../../assets/images/team/piyush.png';
import TeamImg3 from '../../assets/images/team/nishrasom.png';
import TeamImg4 from '../../assets/images/team/visheshsom.png';
import TeamImg5 from '../../assets/images/team/jaysom.png';


function Team() {
    return (
        <>
            <section className="team-five-area pt-120 pb-0">
                <div className="team-five__shape">
                    <img src={TeamShapeImg} alt="shape"/>
                </div>
                <div className="container pb-120">
                    <div className="team-five__wrp">
                        <div className="row g-4">
                            <div className="col-xl-3 col-sm-6">
                                <div className="team-five__item">
                                    <div className="team-five__image">
                                        <img src={TeamImg1} alt="image"/>
                                        <div className="share">
                                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1_249)">
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
                                        <h3 className="mb-2"><Link className="primary-hover" to="/page-team-details">Pankaj Sompura</Link></h3>
                                        <span>Director / Principal Architect</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="team-five__item">
                                    <div className="team-five__image">
                                        <img src={TeamImg2} alt="image"/>
                                        <div className="share">
                                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1_249)">
                                                    <path d="M3.04491 5.32409C1.45712 5.32409 0.169906 4.13224 0.169906 2.66204C0.169907 1.19184 1.45712 -1.95075e-07 3.04491 -1.25671e-07C4.63275 -5.62639e-08 5.91992 1.19184 5.91992 2.66204C5.91992 4.13224 4.63275 5.32409 3.04491 5.32409Z" fill="white" />
                                                    <path d="M9.125 10.6481C7.53718 10.6481 6.24998 9.45632 6.24998 7.98614C6.24998 6.51592 7.53718 5.3241 9.125 5.3241C10.7128 5.3241 12 6.51592 12 7.98614C12 9.45632 10.7128 10.6481 9.125 10.6481Z" fill="white" />
                                                    <path d="M2.87499 15.8162C1.28715 15.8162 -1.63931e-05 14.6244 -1.63288e-05 13.1542C-1.62646e-05 11.684 1.28715 10.4922 2.87499 10.4922C4.46278 10.4922 5.75 11.684 5.75 13.1542C5.75 14.6244 4.46278 15.8162 2.87499 15.8162Z" fill="white" />
                                                    <path d="M5.74973 7.82898C5.74973 6.01253 3.61493 5.40182 2.79754 5.32355L5.83431 2.51172C5.91888 3.26857 6.64608 5.26089 8.87842 5.32355C9.01372 9.64542 8.9348 10.6737 8.87842 10.6476C6.51077 10.5224 5.80613 12.7287 5.74973 13.616L2.79754 10.491C3.61493 10.3605 5.74973 9.64542 5.74973 7.82898Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath><rect width="16" height="12" fill="white" transform="translate(12) rotate(90)" /></clipPath>
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
                                        <h3 className="mb-2"><Link className="primary-hover" to="/page-team-details">Piyush Patel</Link></h3>
                                        <span>Advisory</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="team-five__item">
                                    <div className="team-five__image">
                                        <img src={TeamImg3} alt="image"/>
                                        <div className="share">
                                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1_249)">
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
                                        <h3 className="mb-2"><Link className="primary-hover" to="/page-team-details">Nishra Sompura</Link></h3>
                                        <span>Senior Architect</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="team-five__item">
                                    <div className="team-five__image">
                                        <img src={TeamImg4} alt="image"/>
                                        <div className="share">
                                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1_249)">
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
                                        <h3 className="mb-2"><Link className="primary-hover" to="/page-team-details">Vishesh Sompura</Link></h3>
                                        <span>Management / Software Engineer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="team-five__item">
                                    <div className="team-five__image">
                                        <img src={TeamImg5} alt="image"/>
                                        <div className="share">
                                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1_249)">
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
                                        <h3 className="mb-2"><Link className="primary-hover" to="/page-team-details">Jay Sompura</Link></h3>
                                        <span>Architect</span>
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

export default Team;
