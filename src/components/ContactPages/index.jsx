import React from 'react';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import PageTitle from '../PageTitle.jsx';
import News from './News.jsx';

function NewsPages() {

    return (
        <>
            <InnerPageHeader />
            <PageTitle
                title="News"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { li: '/news', title: 'News' },
                ]}
            />
            <News />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default NewsPages;
