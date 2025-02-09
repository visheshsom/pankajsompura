import React, {useEffect} from 'react';
import BackToTop from '../BackToTop.jsx';
import FooterHomeTwo from './FooterHomeTwo.jsx';
import HeroHomeTwo from './HeroHomeTwo.jsx';
import HomeTwoHeaderDark from './HomeTwoHeaderDark.jsx';
import FeatureHomeTwo from './FeatureHomeTwo.jsx';
import ProjectHomeTwo from './ProjectHomeTwo.jsx';
import AboutHomeTwo from './AboutHomeTwo.jsx';
import ChooseUsHomeTwo from './ChooseUsHomeTwo.jsx';
import FunfactHomeTwo from './FunfactHomeTwo.jsx';
import ContactHomeTwo from './ContactHomeTwo.jsx';
import BlogHomeTwo from './BlogHomeTwo.jsx';


function HomeTwo() {
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "dark");
        return () => {
          document.documentElement.removeAttribute("data-theme", "dark");
        };
    });
    return (
        <>
            <HomeTwoHeaderDark />
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