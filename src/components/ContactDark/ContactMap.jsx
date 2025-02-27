import React from 'react';


function ContactMap({ className }) {
    return (
        <>
            <div className="contact__map">
            <iframe  
        className="map w-100"  
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=TAKSHASHILA%20APARTMENT,%20Thaltej,%20Ahmedabad,%20Gujarat%20380059&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    </iframe>
            </div>
        </>
    );
}

export default ContactMap;
