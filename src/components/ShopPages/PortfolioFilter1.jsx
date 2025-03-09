import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import Isotope from 'isotope-layout';
import ProductImage1 from '../../assets/images/resource/products/1.jpg';
import ProductImage2 from '../../assets/images/resource/products/2.jpg';
import ProductImage3 from '../../assets/images/resource/products/3.jpg';
import ProductImage4 from '../../assets/images/resource/products/4.jpg';
import ProductImage5 from '../../assets/images/resource/products/5.jpg';
import ProductImage6 from '../../assets/images/resource/products/6.jpg';
import ProductImage7 from '../../assets/images/resource/products/7.jpg';
import ProductImage8 from '../../assets/images/resource/products/8.jpg';
export default function PortfolioFilter1() {
    const isotopeContainer = useRef(null);
    const [filterKey, setFilterKey] = useState("*");
    const [isotopeInstance, setIsotopeInstance] = useState(null);

    useEffect(() => {
        if (isotopeContainer.current) {
            const instance = new Isotope(isotopeContainer.current, {
                itemSelector: ".mix",
                percentPosition: true,
                masonry: {
                    columnWidth: ".mix",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
            setIsotopeInstance(instance);
        }
    }, []);

    useEffect(() => {
        if (isotopeInstance) {
            isotopeInstance.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
        }
    }, [filterKey, isotopeInstance]);

    const handleFilterKeyChange = (key) => () => {
        setFilterKey(key);
    };

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter");

    return (
        <>
            <div className="filters clearfix">
				<ul className="filter-tabs filter-btns clearfix">
					<li className={activeBtn('*')} onClick={handleFilterKeyChange('*')}>All</li>
					<li className={activeBtn('compass')} onClick={handleFilterKeyChange('compass')}>Compass</li>
					<li className={activeBtn('reel')} onClick={handleFilterKeyChange('reel')}>Reel</li>
					<li className={activeBtn('stearing')} onClick={handleFilterKeyChange('stearing')}>Stearing</li>
					<li className={activeBtn('jacket')} onClick={handleFilterKeyChange('jacket')}>Jacket</li>
					<li className={activeBtn('binocular')} onClick={handleFilterKeyChange('binocular')}>Binocular</li>
				</ul>
            </div>
            <div className="items-container row" ref={isotopeContainer}>
                {/* Your product blocks here */}
                <div className="product-block all mix compass reel col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link to="/shop-product-details"><img className="w-100" src={ProductImage1} alt="Product 1" /></Link></div>
						<div className="content">
							<h4><Link to="/shop-product-details">Fishing Reel</Link></h4>
							<span className="price">$32.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
						</div>
						<div className="icon-box">
							<Link to="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart"></i></Link>
							<Link to="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></Link>
						</div>
					</div>
				</div>
				<div className="product-block all mix stearing jacket reel col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link to="/shop-product-details"><img className="w-100" src={ProductImage2} alt="Product 2" /></Link></div>
						<div className="content">
							<h4><Link to="/shop-product-details">Compass</Link></h4>
							<span className="price">$52.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
						</div>
						<div className="icon-box">
							<Link to="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart"></i></Link>
							<Link to="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></Link>
						</div>
					</div>
				</div>
				<div className="product-block all mix stearing reel binocular col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link to="/shop-product-details"><img className="w-100" src={ProductImage3} alt="Product 3" /></Link></div>
						<div className="content">
							<h4><Link to="/shop-product-details">Binocular</Link></h4>
							<span className="price">$42.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
						</div>
						<div className="icon-box">
							<Link to="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart"></i></Link>
							<Link to="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></Link>
						</div>
					</div>
				</div>
				<div className="product-block all mix compass jacket binocular col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link to="/shop-product-details"><img className="w-100" src={ProductImage4} alt="Product 4" /></Link></div>
						<div className="content">
							<h4><Link to="/shop-product-details">Fish Finder</Link></h4>
							<span className="price">$22.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
						</div>
						<div className="icon-box">
							<Link to="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart"></i></Link>
							<Link to="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></Link>
						</div>
					</div>
				</div>
				<div className="product-block all mix stearing jacket reel col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link to="/shop-product-details"><img className="w-100" src={ProductImage5} alt="Product 5" /></Link></div>
						<div className="content">
							<h4><Link to="/shop-product-details">Compass</Link></h4>
							<span className="price">$34.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
						</div>
						<div className="icon-box">
							<Link to="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart"></i></Link>
							<Link to="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></Link>
						</div>
					</div>
				</div>
				<div className="product-block all mix compass stearing col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link to="/shop-product-details"><img className="w-100" src={ProductImage6} alt="Product 6" /></Link></div>
						<div className="content">
							<h4><Link to="/shop-product-details">Lifebuoy</Link></h4>
							<span className="price">$25.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
						</div>
						<div className="icon-box">
							<Link to="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart"></i></Link>
							<Link to="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></Link>
						</div>
					</div>
				</div>
				<div className="product-block all mix reel binocular col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link to="/shop-product-details"><img className="w-100" src={ProductImage7} alt="Product 7" /></Link></div>
						<div className="content">
							<h4><Link to="/shop-product-details">Life jacket</Link></h4>
							<span className="price">$20.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
						</div>
						<div className="icon-box">
							<Link to="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart"></i></Link>
							<Link to="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></Link>
						</div>
					</div>
				</div>
				<div className="product-block all mix reel binocular col-lg-3 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image"><Link to="/shop-product-details"><img className="w-100" src={ProductImage8} alt="Product 8" /></Link></div>
						<div className="content">
							<h4><Link to="/shop-product-details">Boat Steering</Link></h4>
							<span className="price">$40.00</span>
							<span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
						</div>
						<div className="icon-box">
							<Link to="/shop-product-details" className="ui-btn like-btn"><i className="fa fa-heart"></i></Link>
							<Link to="/shop-cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></Link>
						</div>
					</div>
				</div>

            </div>
        </>
    );
}
