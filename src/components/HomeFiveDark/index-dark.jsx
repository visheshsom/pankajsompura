import React, {useEffect} from 'react';
import BackToTop from '../BackToTop.jsx';
import FooterHomeFive from './FooterHomeFive.jsx';
import HeroHomeFive from './HeroHomeFive.jsx';
import HomeFiveHeaderDark from './HomeFiveHeaderDark.jsx';
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
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "dark");
        return () => {
          document.documentElement.removeAttribute("data-theme", "dark");
        };
    });

    return (
        <>
            <HomeFiveHeaderDark />
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
            <FooterHomeFive />
            <BackToTop />
        </>
    );
}

export default HomeFive;