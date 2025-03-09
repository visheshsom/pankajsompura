import React from 'react';
import { Link } from 'react-router-dom';
import BannerShape1 from '../../assets/images/shape/banner-three__shape-dark.png';
import BannerImage1 from '../../assets/images/banner/banner-three-image.png';
import BannerImage2 from '../../assets/images/banner/banner-three-image-border.png';

function HeroHomeThree({ className }) {
return (
<>
        <section className={`banner-three-area ${className || ''}`}>
            <div className="banner-three__shape">
                <img src={BannerShape1} alt="shape"/>
            </div>
            <div className="banner-three__image">
                <img className="parallaxScaleScroll" src={BannerImage1} alt="image"/>
                <img className="image-border" src={BannerImage2} alt="shape"/>
                <h2 className="stroke-text">Design</h2>
            </div>
            <div className="banner-three__content">
                <h1 className="parallaxRoteteYScroll">Innovative <span className="stroke-text">Interiors</span></h1>
                <p className="mt-50">Lorem ipsum dolor sit amet consectetur adipiscing elit eros nullam inceptos placerat
                    aliquet taciti
                    conubia himenaeos
                    elementum mattis per velit eleifend ridiculus.</p>
                <Link to="#0" className="btn-arrow mt-40"><i className="fa-light fa-arrow-up-right"></i></Link>
            </div>
        </section>
</>
);
}

export default HeroHomeThree;
