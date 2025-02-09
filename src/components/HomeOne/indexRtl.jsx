import React, { createContext, useContext, useState, useEffect } from 'react';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import HeroRtl from './HeroRtl.jsx';
import HomeOneHeader from './HomeOneHeader.jsx';
import AboutHomeOne from './AboutHomeOne.jsx';
import ProjectRtl from './ProjectRtl.jsx';
import ChooseUsHomeOne from './ChooseUsHomeOne.jsx';
import TestimonialHomeOne from './TestimonialHomeOneRTL.jsx';
import FunfactHomeOne from './FunfactHomeOne.jsx';
import MarqueeHomeOne from './MarqueeHomeOne.jsx';
import ClientHomeOne from './ClientHomeOne.jsx';
import ContactHomeOne from './ContactHomeOne.jsx';
import BlogHomeOne from './BlogHomeOne.jsx';



function HomeOne() {
    // const [isRTL, setIsRTL] = useState(false);
    // document.documentElement.setAttribute('dir', isRTL ? 'ltr' : 'rtl');

    // const RTLContext = createContext();

    //  function RTLProvider({ children }) {
    // const [isRTL, setIsRTL] = useState(false);

    // useEffect(() => {
    //     document.documentElement.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
    // }, [isRTL]);

    // const toggleRTL = () => setIsRTL(!isRTL);

    // // Dynamically load the appropriate stylesheet
    // const link = document.createElement('link');
    // link.rel = 'stylesheet';
    // link.href = isRTL
    //   ? '/src/assets/css/style-rtl.css'
    //   : '/src/assets/css/style.css';
    // document.head.appendChild(link);

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
            <HomeOneHeader />
            <HeroRtl />
            <AboutHomeOne />
            <ProjectRtl />
            <ChooseUsHomeOne />
            <TestimonialHomeOne />
            <FunfactHomeOne />
            <MarqueeHomeOne />
            <ClientHomeOne />
            <ContactHomeOne />
            <BlogHomeOne />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeOne;