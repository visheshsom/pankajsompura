import React from 'react';
import BackToTop from '../BackToTop.jsx';
import FooterHomeTwo from './FooterHomeTwo.jsx';
import HeroHomeTwo from './HeroHomeTwo.jsx';
import HomeTwoHeader from './HomeTwoHeader.jsx';
import FeatureHomeTwo from './FeatureHomeTwo.jsx';
import ProjectHomeTwo from './ProjectHomeTwo.jsx';
import AboutHomeTwo from './AboutHomeTwo.jsx';
import ChooseUsHomeTwo from './ChooseUsHomeTwo.jsx';
import FunfactHomeTwo from './FunfactHomeTwo.jsx';
import ContactHomeTwo from './ContactHomeTwo.jsx';
import BlogHomeTwo from './BlogHomeTwo.jsx';


function HomeTwo() {
    return (
        <>
            <HomeTwoHeader />
            <HeroHomeTwo />
            <FeatureHomeTwo />
            <ProjectHomeTwo />
            <AboutHomeTwo />
            <ChooseUsHomeTwo />
            <FunfactHomeTwo />
            <ContactHomeTwo />
            <BlogHomeTwo />
            <FooterHomeTwo />
            <BackToTop />
        </>
    );
}

export default HomeTwo;