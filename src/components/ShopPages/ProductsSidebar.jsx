import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import RangeSlider from '../../lib/RangeSlider.jsx';
import PortfolioFilter2 from './PortfolioFilter2.jsx';
import ProductDetailsImg1 from '../../assets/images/resource/products/thumb-1.jpg';
import ProductDetailsImg2 from '../../assets/images/resource/products/thumb-2.jpg';
import ProductDetailsImg3 from '../../assets/images/resource/products/thumb-3.jpg';

function Products() {
    
    return (
        <>
        <InnerPageHeader />
		<PageTitle
        title="Shop"
        breadcrumb={[
            { link: '/', title: 'Home' },
            { li: '/products-sidebar', title: 'Products Sidebar' },
        ]}
     />
		<section className="featured-products overflow-hidden pt-0 mt-80">
			<div className="auto-container">
				<div className="team-five__wrp">
					<div className="row clearfix">
						<div className="col-lg-3 col-sm-12 px-3">
							<div className="shop-sidebar">
								<div className="sidebar-search">
									<form action="/shop-products" method="post" className="search-form">
										<div className="form-group">
											<input type="search" name="search-field" placeholder="Search..." required=""/>
											<button><i className="far fa-search"></i></button>
										</div>
									</form>
								</div>
								<div className="sidebar-widget category-widget">
									<div className="widget-title">
										<h5 className="widget-title">Categories</h5>
									</div>
									<div className="widget-content">
									<RangeSlider/>
									</div>
								</div>
								<div className="sidebar-widget price-filters">
									<div className="widget-title">
										<h5 className="widget-title">Filter by Price</h5>
									</div>
									<div className="range-slider clearfix">
										<div className="price-range-slider"></div>
										<div className="clearfix">
											<p>Price:</p>
											<div className="title"></div>
											<div className="input"><input type="text" className="property-amount" name="field-name" readonly/></div>
											<input type="submit" value="Filter"/>
										</div>
									</div>
								</div>
								<div className="sidebar-widget post-widget">
									<div className="widget-title">
										<h5 className="widget-title">Popular Products</h5>
									</div>
									<div className="post-inner">
										<div className="post">
											<figure className="post-thumb"><Link to="/shop-product-details"><img src={ProductDetailsImg1} alt="Product Thumb" /></Link></figure>
											<Link to="/shop-product-details">Best Headset</Link>
											<span className="price">$45.00</span>
										</div>
										<div className="post">
											<figure className="post-thumb"><Link to="/shop-product-details"><img src={ProductDetailsImg2} alt="Product Thumb" /></Link></figure>
											<Link to="/shop-product-details">Quality Battery</Link>
											<span className="price">$34.00</span>
										</div>
										<div className="post">
											<figure className="post-thumb"><Link to="/shop-product-details"><img src={ProductDetailsImg3} alt="Product Thumb" /></Link></figure>
											<Link to="/shop-product-details">Smart Watch</Link>
											<span className="price">$29.00</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-9 col-sm-12 px-3 content-side">
							<div className="mixitup-gallery mt-5 mt-lg-0">
								<PortfolioFilter2 />
							</div>
						</div>
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
