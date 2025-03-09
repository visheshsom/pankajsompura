import React from 'react';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import PortfolioFilter1 from './PortfolioFilter1.jsx';

function Products() {
    
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
        <section className="featured-products">
            <div className="auto-container">
                <div className="team-five__wrp">
                    <div className="mixitup-gallery">
                        <PortfolioFilter1 />   
                    </div>
                </div>
            </div>
        </section>
        <FooterHomeThree />
        <BackToTop />
        </>
    );
}

export default Products;
