import React from 'react';
import BannerImage1 from '../../assets/images/shape/banner-five-shape.png';
import BannerImage2 from '../../assets/images/banner/banner-five-image.png';
import BannerImage3 from '../../assets/images/banner/banner-five-image.png';

function HeroHomeTwo({ className }) {
return (
        <>
            <section className="banner-five-area">
                    <div className="banner-five__shape">
                        <img className="parallaxScaleScroll" src={BannerImage1} alt="shape"/>
                    </div>
                    <div className="banner-five__wrp">
                        <div className="banner-five__content">
                            <div className="image d-block d-sm-none mb-4">
                                <img src={BannerImage2} alt="image"/>
                            </div>
                            <div className="top-content">
                                <h1 className="parallaxLeftScroll wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms"> Innovative</h1>
                                <h3 className="wow bounceIn">OF DIVERSE</h3>
                            </div>
                            <h1 className="parallaxRightScroll wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <img src={BannerImage3} alt="image"/>
                                Interior Design
                            </h1>
                        </div>
                    </div>
            </section>
        </>
);
}

export default HeroHomeTwo;
