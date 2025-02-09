import React, { createContext, useContext, useState, useEffect } from 'react';
import BackToTop from '../BackToTop.jsx';
import FooterRtl from './FooterRtl.jsx';
import HeroHomeFive from './HeroHomeFive.jsx';
import HomeFiveHeader from './HomeFiveHeader.jsx';
import FeatureHomeFive from './FeatureHomeFive.jsx';
import OfferHomeFive from './OfferHomeFive.jsx';
import MarqueeHomeFive from './MarqueeHomeFive.jsx';
import ProjectHomeFive from './ProjectHomeFive.jsx';
import AboutHomeFive from './AboutHomeFive.jsx';
import BrandHomeFive from './BrandHomeFive.jsx';
import TeamHomeFive from './TeamHomeFive.jsx';
import FunfactHomeFive from './FunfactHomeFive.jsx';
import ContactHomeFive from './ContactHomeFive.jsx';
import BlogHomeFive from './BlogHomeFive.jsx';

function HomeFive() {

    const [isRTL, setIsRTL] = useState(false);
    document.documentElement.setAttribute('dir', isRTL ? 'ltr' : 'rtl');

    const RTLContext = createContext();

     function RTLProvider({ children }) {
    const [isRTL, setIsRTL] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('dir', isRTL ? 'rtr' : 'ltl');
    }, [isRTL]);

    const toggleRTL = () => setIsRTL(!isRTL);

    }

     function useRTL() {
        return useContext(RTLContext);
    }


    return (
        <>
            <HomeFiveHeader />
            <HeroHomeFive />
            <FeatureHomeFive />
            <OfferHomeFive />
            <MarqueeHomeFive />
            <ProjectHomeFive />
            <FunfactHomeFive />
            <AboutHomeFive />
            <BrandHomeFive />
            <TeamHomeFive />
            <ContactHomeFive />
            <BlogHomeFive />
            <FooterRtl />
            <BackToTop />
        </>
    );
}

export default HomeFive;