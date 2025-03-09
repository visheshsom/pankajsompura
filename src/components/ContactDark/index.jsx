import React, {useEffect} from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeFiveHeaderDark from './HomeFiveHeaderDark.jsx';
import HeroContact from './HeroContact.jsx';
import ContactV1 from './ContactV1.jsx';
import ContactPageMarquee from './ContactPageMarquee.jsx';
import ContactMap from './ContactMap.jsx';
import FooterHomeThree from './FooterHomeThree.jsx';

function Contact() {
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "dark");
        return () => {
          document.documentElement.removeAttribute("data-theme", "dark");
        };
    });
    return (
        <>
            <HomeFiveHeaderDark />
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