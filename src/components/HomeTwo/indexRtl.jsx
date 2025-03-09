import React, { createContext, useContext, useState, useEffect } from 'react';
import BackToTop from '../BackToTop.jsx';
import FooterHomeTwoRtl from './FooterHomeTwoRtl.jsx';
import HeroHomeTwo from './HeroHomeTwo.jsx';
import HomeTwoHeader from './HomeTwoHeader.jsx';
import FeatureRtl from './FeatureRtl.jsx';
import ProjectHomeTwo from './ProjectHomeTwo.jsx';
import AboutHomeTwo from './AboutHomeTwo.jsx';
import ChooseUsHomeTwo from './ChooseUsHomeTwo.jsx';
import FunfactHomeTwoRtl from './FunfactHomeTwoRtl.jsx';
import ContactHomeTwo from './ContactHomeTwo.jsx';
import BlogHomeTwo from './BlogHomeTwo.jsx';


function HomeTwo() {
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
            <HomeTwoHeader />
            <HeroHomeTwo />
            <FeatureRtl />
            <ProjectHomeTwo />
            <AboutHomeTwo />
            <ChooseUsHomeTwo />
            <FunfactHomeTwoRtl />
            <ContactHomeTwo />
            <BlogHomeTwo />
            <FooterHomeTwoRtl />
            <BackToTop />
        </>
    );
}

export default HomeTwo;