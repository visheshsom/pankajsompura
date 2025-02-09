import React, {useEffect} from 'react';
import BackToTop from '../BackToTop.jsx';
import FooterHomeThree from './FooterHomeThree.jsx';
import HeroHomeThree from './HeroHomeThree.jsx';
import HomeThreeHeaderDark from './HomeThreeHeaderDark.jsx';
import ServiceHomeThree from './ServiceHomeThree.jsx';
import MarqueeHomeThree from './MarqueeHomeThree.jsx';
import FunfactHomeThree from './FunfactHomeThree.jsx';
import TeamtHomeThree from './TeamtHomeThree.jsx';
import ContactHomeThree from './ContactHomeThree.jsx';
import ProjectHomeThree from './ProjectHomeThree.jsx';
import BlogHomeThree from './BlogHomeThree.jsx';


function HomeThree() {
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "dark");
        return () => {
          document.documentElement.removeAttribute("data-theme", "dark");
        };
    });
    return (
        <>
            <HomeThreeHeaderDark />
            <HeroHomeThree />
            <ServiceHomeThree />
            <MarqueeHomeThree />
            <ProjectHomeThree />
            <FunfactHomeThree />
            <TeamtHomeThree />
            <ContactHomeThree />
            <BlogHomeThree />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default HomeThree;