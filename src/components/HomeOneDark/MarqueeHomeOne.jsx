import React from 'react';
import Marqueeimage1 from '../../assets/images/bg/marquee-bg.jpg';


function MarqueeHomeOne({ className }) {
    return (
        <>
            <section className={`marquee-area ${className || ""}`} data-speed="0.5" data-parallax="scroll"
                style={{ backgroundImage: `url(${Marqueeimage1})`}}>
                <div className="marquee__wrp">
                    <div className="marquee__slide">
                        <div className="marquee__item-wrp">
                            <div className="marquee__item">
                                <h2>Decoration</h2>
                            </div>
                            <div className="marquee__item">
                                <h2>Interior Design</h2>
                            </div>
                            <div className="marquee__item">
                                <h2>Modern</h2>
                            </div>
                        </div>
                        <div className="marquee__item-wrp">
                            <div className="marquee__item">
                                <h2>Decoration</h2>
                            </div>
                            <div className="marquee__item">
                                <h2>Interior Design</h2>
                            </div>
                            <div className="marquee__item">
                                <h2>Modern</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MarqueeHomeOne;
