import React from 'react';
import CounterUp from '../../lib/CounterUp.jsx'; 
function FunfactHomeFive({ className }) {
        const percentage1 = 70;
        const percentage2 = 30;
        const percentage3 = 5;
        const percentage4 = 8;
 
    return (
        <>
            <section className={`funfact-five-area pt-70 pb-70 ${className || ""}`}>
                <div className="container">
                    <div className="funfact-five__wrp">
                        <div className="funfact-five__item hover-item wow bounceInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <h2><CounterUp count={percentage1} time={3} /></h2>
                            <p>OF TEMPLE ARCHITECTURE</p>
                        </div>
                        <div className="funfact-five__item hover-item active wow bounceInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <h2><CounterUp count={percentage2} time={3} /></h2>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <div className="funfact-five__item hover-item wow bounceInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <h2><CounterUp count={percentage3} time={3} /></h2>
                            <p>PROFESSIONAL TEAM</p>
                        </div>
                        <div className="funfact-five__item hover-item wow bounceInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <h2><CounterUp count={percentage4} time={3} /></h2>
                            <p>COMPETITION WINNER</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FunfactHomeFive;
