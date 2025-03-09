import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeFiveHeader from './HomeFiveHeader.jsx';
import HeroContact from './HeroContact.jsx';
import ContactV1 from './ContactV1.jsx';
import ContactPageMarquee from './ContactPageMarquee.jsx';
import ContactMap from './ContactMap.jsx';
import FooterHomeThree from './FooterHomeThree.jsx';

function Contact() {
    return (
        <>
            <HomeFiveHeader />
            <HeroContact />
            <ContactV1 />
            <ContactPageMarquee />
            <ContactMap />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Contact;