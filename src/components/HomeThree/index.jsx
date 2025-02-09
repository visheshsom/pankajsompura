import React from 'react';
import BackToTop from '../BackToTop.jsx';
import FooterHomeThree from './FooterHomeThree.jsx';
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
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default HomeThree;