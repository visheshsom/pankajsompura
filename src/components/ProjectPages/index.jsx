import React from 'react';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import Project from './Project.jsx';

function ProjectPages() {

    return (
        <>
            <InnerPageHeader />
            <PageTitle
                title="Project"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { li: '/Project', title: 'Project' },
                ]}
            />
            <Project />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default ProjectPages;
