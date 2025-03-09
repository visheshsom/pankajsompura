import React, {useEffect} from 'react';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import HeroHomeOne from './HeroHomeOne.jsx';
import HomeOneHeaderDark from './HomeOneHeaderDark.jsx';
import AboutHomeOne from './AboutHomeOne.jsx';
import ProjectHomeOne from './ProjectHomeOne.jsx';
import ChooseUsHomeOne from './ChooseUsHomeOne.jsx';
import TestimonialHomeOne from './TestimonialHomeOne.jsx';
import FunfactHomeOne from './FunfactHomeOne.jsx';
import MarqueeHomeOne from './MarqueeHomeOne.jsx';
import ClientHomeOne from './ClientHomeOne.jsx';
import ContactHomeOne from './ContactHomeOne.jsx';
import BlogHomeOne from './BlogHomeOne.jsx';


function HomeOne() {
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "dark");
        return () => {
          document.documentElement.removeAttribute("data-theme", "dark");
        };
    });
    return (
        <>
            <HomeOneHeaderDark />
            <HeroHomeOne className="light-area" />
            <AboutHomeOne className="sub-bg" />
            <ProjectHomeOne className="sub-bg" />
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