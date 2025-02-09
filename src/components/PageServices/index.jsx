import React from 'react';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import Services from './Services.jsx';

function PageServices() {

    return (
        <>
            <InnerPageHeader />
            <PageTitle
                title="Services"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { li: '/services', title: 'Services' },
                ]}
            />
            <Services />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default PageServices;
