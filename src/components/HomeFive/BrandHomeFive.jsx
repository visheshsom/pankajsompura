import React from 'react';
import BrandImage1 from '../../assets/images/bg/marquee-bg.jpg';

function BrandHomeFive({ className }) {
return (
    <>
        <section className={`marquee-area ${className || ''}`} data-speed="0.5" data-parallax="scroll"
            style={{ backgroundImage: `url(${BrandImage1})`}}>
            <div className="marquee__wrp">
                <div className="marquee__slide">
                    <div className="marquee__item-wrp">
                        <div className="marquee__item">
                            <h2>TEMPLE ARCHITECTURE</h2>
                        </div>
                        <div className="marquee__item">
                            <h2>DESIGN</h2>
                        </div>
                        <div className="marquee__item">
                            <h2>MODERN</h2>
                        </div>
                    </div>
                    <div className="marquee__item-wrp">
                        <div className="marquee__item">
                            <h2>TEMPLE ARCHITECTURE</h2>
                        </div>
                        <div className="marquee__item">
                            <h2>DESIGN</h2>
                        </div>
                        <div className="marquee__item">
                            <h2>MODERN</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);
}

export default BrandHomeFive;
