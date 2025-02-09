import React, { useState, useEffect } from 'react';
import BackToTop from '../BackToTop.jsx';
import FooterHomeFour from './FooterHomeFour.jsx';
import HeroRtl from './HeroRtl.jsx';
import HomeFourHeader from './HomeFourHeader.jsx';
import FeatureHomeFour from './FeatureHomeFour.jsx';
import ProjectHomeFour from './ProjectHomeFour.jsx';
import MarqueeHomeFour from './MarqueeHomeFour.jsx';
import AboutHomeFour from './AboutHomeFour.jsx';
import ChooseUsHomeFour from './ChooseUsHomeFour.jsx';
import VideoHomeFour from './VideoHomeFour.jsx';
import TestimonialHomeFourRTL from './TestimonialHomeFourRTL.jsx';
import ClientHomeFour from './ClientHomeFour.jsx';
import ContactHomeFour from './ContactHomeFour.jsx';
import BlogHomeFour from './BlogHomeFour.jsx';


function HomeFour() {

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

        // return () => {
        // // Clean up the old link element to avoid duplicates
        // document.head.removeChild(link);
        // };
    }, [isRTL]);

    
    return (
        <>
            <HomeFourHeader />
            <HeroRtl />
            <FeatureHomeFour />
            <ProjectHomeFour />
            <MarqueeHomeFour />
            <AboutHomeFour />
            <ChooseUsHomeFour />
            <VideoHomeFour />
            <TestimonialHomeFourRTL />
            <ClientHomeFour />
            <ContactHomeFour />
            <BlogHomeFour />
            <FooterHomeFour />
            <BackToTop />
        </>
    );
}

export default HomeFour;