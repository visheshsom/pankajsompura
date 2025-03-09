import React, {useEffect} from 'react';
import BackToTop from '../BackToTop.jsx';
import FooterHomeFour from './FooterHomeFour.jsx';
import HeroHomeFour from './HeroHomeFour.jsx';
import HomeFourHeaderDark from './HomeFourHeaderDark.jsx';
import FeatureHomeFour from './FeatureHomeFour.jsx';
import ProjectHomeFour from './ProjectHomeFour.jsx';
import MarqueeHomeFour from './MarqueeHomeFour.jsx';
import AboutHomeFour from './AboutHomeFour.jsx';
import ChooseUsHomeFour from './ChooseUsHomeFour.jsx';
import VideoHomeFour from './VideoHomeFour.jsx';
import TestimonialHomeFour from './TestimonialHomeFour.jsx';
import ClientHomeFour from './ClientHomeFour.jsx';
import ContactHomeFour from './ContactHomeFour.jsx';
import BlogHomeFour from './BlogHomeFour.jsx';


function HomeFour() {
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "dark");
        return () => {
          document.documentElement.removeAttribute("data-theme", "dark");
        };
    });
    return (
        <>
            <HomeFourHeaderDark />
            <HeroHomeFour />
            <FeatureHomeFour />
            <ProjectHomeFour />
            <MarqueeHomeFour />
            <AboutHomeFour />
            <ChooseUsHomeFour />
            <VideoHomeFour />
            <TestimonialHomeFour />
            <ClientHomeFour />
            <ContactHomeFour />
            <BlogHomeFour />
            <FooterHomeFour />
            <BackToTop />
        </>
    );
}

export default HomeFour;