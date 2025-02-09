import React from 'react';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import AboutHomeOne from '../HomeOne/AboutHomeOne.jsx';
import ProjectHomeFour from '../HomeFour/ProjectHomeFour.jsx';
import BlogHomeOne from '../HomeOne/BlogHomeOne.jsx';
import TeamHomeFive from '../HomeFive/TeamHomeFive.jsx';

function AboutUs() {

    return (
        <>
            <InnerPageHeader />
            <PageTitle
                title="About Us"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { li: '/about-us', title: 'About us' },
                ]}
            />
            <AboutHomeOne />
            <ProjectHomeFour />
            <TeamHomeFive />
            <BlogHomeOne />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default AboutUs;
