import React, { createContext, useContext, useState, useEffect } from 'react';
import BackToTop from '../BackToTop.jsx';
import FooterRtl from './FooterRtl.jsx';
import HeroHomeThree from './HeroHomeThree.jsx';
import HomeThreeHeader from './HomeThreeHeader.jsx';
import ServiceHomeThree from './ServiceHomeThree.jsx';
import MarqueeHomeThree from './MarqueeHomeThree.jsx';
import FunfactHomeThree from './FunfactHomeThree.jsx';
import TeamtHomeThree from './TeamtHomeThree.jsx';
import ContactHomeThree from './ContactHomeThree.jsx';
import ProjectHomeThree from './ProjectHomeThree.jsx';
import BlogHomeThree from './BlogHomeThree.jsx';


function HomeThree() {

    // const [isRTL, setIsRTL] = useState(false);
    // document.documentElement.setAttribute('dir', isRTL ? 'ltr' : 'rtl');

    // const RTLContext = createContext();

    //  function RTLProvider({ children }) {
    // const [isRTL, setIsRTL] = useState(false);

    // useEffect(() => {
    //     document.documentElement.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
    // }, [isRTL]);

    // const toggleRTL = () => setIsRTL(!isRTL);

    // }

    //  function useRTL() {
    //     return useContext(RTLContext);
    // }

    const [isRTL, setIsRTL] = useState(false);

    useEffect(() => {
        // Update the `dir` attribute on the root HTML element
        document.documentElement.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
        
        // Dynamically load the appropriate stylesheet
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = isRTL
        ? '/src/assets/css/style.css'
        : '/src/assets/css/style-rtl.css';
        document.head.appendChild(link);

        return () => {
        // Clean up the old link element to avoid duplicates
        document.head.removeChild(link);
        };
    }, [isRTL]);

    
    return (
        <>
            <HomeThreeHeader />
            <HeroHomeThree />
            <ServiceHomeThree />
            <MarqueeHomeThree />
            <ProjectHomeThree />
            <FunfactHomeThree />
            <TeamtHomeThree />
            <ContactHomeThree />
            <BlogHomeThree />
            <FooterRtl />
            <BackToTop />
        </>
    );
}

export default HomeThree;