import React from 'react';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import News from './News.jsx';

function NewsPages() {

    return (
        <>
            <InnerPageHeader />
            <PageTitle
                title="News Grid"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { li: '/news', title: 'News' },
                ]}
            />
            <News />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default NewsPages;
