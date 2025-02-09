import React from 'react';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import TestimonialHomeOne from '../HomeOne/TestimonialHomeOne.jsx';
import PageTitle from '../PageTitle.jsx';

function TestimonialPages() {

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
            <TestimonialHomeOne />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default TestimonialPages;
