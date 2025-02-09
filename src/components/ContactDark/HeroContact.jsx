import React from 'react';
import {Link} from 'react-router-dom';


function HeroContact({ className }) {
return (
<>
        <section className={`banner-inner-area ${className || ''}`}>
            <div className="container">
                <div className="banner-inner__content">
                    <Link to="/">home</Link> <span> / Contact Us</span>
                    <h1>Contact Us</h1>
                    <p>We specialize in restoring antique interior designs and developing high-quality solutions to
                        address our clients' needs.</p>
                </div>
            </div>
        </section> 
</>
);
}

export default HeroContact;
