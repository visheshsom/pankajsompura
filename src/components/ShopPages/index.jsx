import React from 'react';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import Products from './Products.jsx';

function ShopPages() {

    return (
        <>
            <InnerPageHeader />
            <PageTitle
                title="Shop"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { li: '/products', title: 'Products' },
                ]}
            />
            <Products />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default ShopPages;