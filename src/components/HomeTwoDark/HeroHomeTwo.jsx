import React from 'react';
import BannerImage1 from '../../assets/images/bg/banner-two-bg-dark.jpg';
import BannerImage2 from '../../assets/images/banner/banner-two-image.jpg';
import BannerImage3 from '../../assets/images/banner/banner-two-image2.jpg';

function HeroHomeTwo({ className }) {
return (
    <>

        <section className={`banner-two-area ${className || ''}`}>
                <div className="banner-two__bg">
                    <img src={BannerImage1} alt="bg-image"/>
                </div>
                <div className="container">
                    <div className="banner-two__wrp">
                        <div className="banner-two__content">
                            <h1 className="wow splt-txt" data-splitting>Creative Temple Design Solutions</h1>
                            <h2>SOMPURA</h2>
                        </div>
                        <div className="banner-two__image">
                            <div className="row g-3 g-md-5">
                                <div className="col-6">
                                    <div className="image wow imageRightToLeft">
                                        <figure className="gsap__parallax"><img src={BannerImage2} alt="image"/></figure>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="image wow imageLeftToRight">
                                        <figure className="gsap__parallax"><img src={BannerImage3} alt="image"/></figure>
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

export default HeroHomeTwo;
