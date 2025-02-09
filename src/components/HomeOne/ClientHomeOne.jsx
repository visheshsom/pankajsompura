import React from 'react';
import brandImage1 from '../../assets/images/brand/bi-1.png';
import brandImage2 from '../../assets/images/brand/bi-2.png';
import brandImage3 from '../../assets/images/brand/bi-3.png';
import brandImage4 from '../../assets/images/brand/brand-image4.png';
import brandImage5 from '../../assets/images/brand/brand-image5.png';


function ClientHomeOne({ className }) {
    return (
        <>

            <div className={`brand-area pt-100 pb-100 ${className || ""}`}>
                <div className="container">
                    <div className="brand__wrp">
                        <div className="brand__item wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1000ms">
                            <img src={brandImage1} alt="image"/>
                        </div>
                        <div className="brand__item wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                            <img src={brandImage2} alt="image"/>
                        </div>
                        <div className="brand__item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                            <img src={brandImage3} alt="image"/>
                        </div>
                        <div className="brand__item wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                            <img src={brandImage4} alt="image"/>
                        </div>
                        <div className="brand__item wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1000ms">
                            <img src={brandImage5} alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientHomeOne;
