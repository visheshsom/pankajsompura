import React from 'react';


function ContactMap({ className }) {
    return (
        <>
            <div className="contact__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15058515.66665815!2d24.50707531408513!3d22.861846684360664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2sbd!4v1713636459047!5m2!1sen!2sbd"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{
                    border: 0,
                    width: "100%",
                    height: "450px",
                    }}
                    title="Google Map"
                ></iframe>
            </div>
        </>
    );
}

export default ContactMap;
