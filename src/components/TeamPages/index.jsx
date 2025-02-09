import React from 'react';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import Team from './Team.jsx';

function TeamPages() {

    return (
        <>
            <InnerPageHeader />
            <PageTitle
                title="Team Grid"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { li: '/team', title: 'Team' },
                ]}
            />
            <Team />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default TeamPages;
