import React, {useState } from "react"; // Combined imports
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay, Thumbs } from 'swiper/modules';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import ProductDetailsImg1 from '../../assets/images/resource/products/product-details.jpg';
import ProductDetailsImg2 from '../../assets/images/resource/products/product-details2.jpg';
import AuthorImage1 from '../../assets/images/resource/testi-1.jpg';
import AuthorImage2 from '../../assets/images/resource/testi-2.jpg';
import ProductDetailsImg3 from '../../assets/images/resource/products/product-details3.jpg';
import ThumbImg1 from '../../assets/images/resource/products/product-details.jpg';
import ThumbImg2 from '../../assets/images/resource/products/product-details2.jpg';
import ThumbImg3 from '../../assets/images/resource/products/product-details3.jpg';
import RelatedProduct1 from '../../assets/images/resource/products/1.jpg';
import RelatedProduct2 from '../../assets/images/resource/products/2.jpg';
import RelatedProduct3 from '../../assets/images/resource/products/3.jpg';
import RelatedProduct4 from '../../assets/images/resource/products/4.jpg';

function ProductsDetails() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantities, setQuantities] = useState({
        item1: 1,
        item2: 1,
        item3: 1
    });

    const handleQuantityChange = (item, change) => {
        setQuantities(prevQuantities => {
            const newQuantity = prevQuantities[item] + change;
            return {
                ...prevQuantities,
                [item]: newQuantity > 0 ? newQuantity : 1
            };
        });
    };

    return (
        <>
            <InnerPageHeader />
            <PageTitle
                title="Product Details"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { li: '/shop-product-details', title: 'Products Details' },
                ]}
            />
            <section className="product-details">
                <div className="container pb-70">
                    <div className="team-five__wrp">
                        <div className="row">
                            <div className="col-lg-6 col-xl-6">
                                <div className="bxslider">
                                    <div className="slider-content">
                                        <Swiper
                                            spaceBetween={10}
                                            pagination={{ clickable: true }}
                                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                            modules={[FreeMode, Navigation, Autoplay, Thumbs]}
                                            loop={true}
                                            autoplay={{
                                                delay: 350000,
                                                disableOnInteraction: false,
                                            }}
                                            className="slider-pager">
                                            <SwiperSlide>
                                                <div className="image-box"><img src={ProductDetailsImg1} alt="Product Details" /></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="image-box"><img src={ProductDetailsImg2} alt="Product Details" /></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="image-box"><img src={ProductDetailsImg3} alt="Product Details" /></div>
                                            </SwiperSlide>
                                        </Swiper>
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            spaceBetween={10}
                                            slidesPerView={5}
                                            freeMode={true}
                                            watchSlidesProgress={true}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="slider-pager">
                                            <SwiperSlide className="product-thumb wide-100">
                                                <figure className="image">
                                                <img src={ThumbImg1} alt="Product Thumb" />
                                                </figure>
                                            </SwiperSlide>
                                            <SwiperSlide className="product-thumb wide-100">
                                                <figure className="image">
                                                <img src={ThumbImg2} alt="Product Thumb" />
                                                </figure>
                                            </SwiperSlide>
                                            <SwiperSlide className="product-thumb wide-100">
                                                <figure className="image">
                                                <img src={ThumbImg3} alt="Product Thumb" />
                                                </figure>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 product-info">
                                <div className="product-details__top">
                                    <h3 className="product-details__title">Backpack  <span>$76.00</span> </h3>
                                </div>
                                <div className="product-details__reveiw">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <span>2 Customer Reviews</span>
                                </div>
                                <div className="product-details__content">
                                    <p className="product-details__content-text1">Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque.</p>
                                    <p className="product-details__content-text2"><strong>REF.</strong> 4231/406 <br /> Available in store</p>
                                </div>

                                <div className="product-details__quantity">
                                    <h3 className="product-details__quantity-title">Choose quantity</h3>
                                    <div className="quantity-box">
                                        <button type="button" className="sub" onClick={() => handleQuantityChange('item1', -1)}>
                                            <i className="fa fa-minus"></i>
                                        </button>
                                        <input type="number" id="1" value={quantities.item1} readOnly />
                                        <button type="button" className="add" onClick={() => handleQuantityChange('item1', 1)}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="product-details__buttons">
                                    <div className="product-details__buttons-1">
                                        <Link to="/cart" className="theme-btn btn-style-one"><span className="btn-title">Add to Cart</span></Link>
                                    </div>
                                    <div className="product-details__buttons-2">
                                        <Link to="/shop-product-details" className="theme-btn btn-style-one"><span className="btn-title">Add to Wishlist</span></Link>
                                    </div>
                                </div>
                                <div className="product-details__social">
                                    <div className="title mt-10"><h3>Share with friends</h3></div>
                                    <ul className="social-icon-one product-share d-flex align-items-center">
                                        <li><a className="me-3" href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a className="me-3" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a className="me-3" href="#"><i className="fab fa-pinterest"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Description Start  */}
            <section className="product-description">
                <div className="container pt-0 pb-90">
                    <div className="team-five__wrp">
                        <div className="product-discription">
                            <div className="tabs-box">
                                <div className="tab-btn-box text-center">
                                    <ul className="tab-btns tab-buttons clearfix">
                                        <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)} data-tab="#tab1">Description</li>
                                        <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)} data-tab="#tab2">Reviews</li>
                                    </ul>
                                </div>
                                <div className="tabs-content">
                                    <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="tab1">
                                        <div className="text">
                                            <h3 className="product-description__title">Description</h3>
                                            <p className="product-description__text1">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                                                phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have
                                                alteration in some injected or words which don't look even slightly believable. If you are going to
                                                use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the
                                                middle of text.
                                            </p>
                                            <div className="product-description__list">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <p><span className="fa fa-arrow-right"></span> Nam at elit nec neque suscipit gravida.</p>
                                                    </li>
                                                    <li>
                                                        <p><span className="fa fa-arrow-right"></span> Aenean egestas orci eu maximus tincidunt.</p>
                                                    </li>
                                                    <li>
                                                        <p><span className="fa fa-arrow-right"></span> Curabitur vel turpis id tellus cursus laoreet.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="product-description__tex2">All the Lorem Ipsum generators on the Internet tend to repeat
                                                predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                                                dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
                                                generate Lorem Ipsum which looks reasonable.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
                                        <div className="customer-comment">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                                                    <div className="single-comment-box">
                                                        <div className="inner-box">
                                                            <figure className="comment-thumb"><img src={AuthorImage2} alt="Product Thumb" /></figure>
                                                            <div className="inner">
                                                                <ul className="rating clearfix">
                                                                    <li><i className="fas fa-star"></i></li>
                                                                    <li><i className="fas fa-star"></i></li>
                                                                    <li><i className="fas fa-star"></i></li>
                                                                    <li><i className="fas fa-star"></i></li>
                                                                    <li><i className="fas fa-star"></i></li>
                                                                </ul>
                                                                <h5>Jon D. William, <span>10 Jan, 2024 . 4:00 pm</span></h5>
                                                                <p>Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                                                    <div className="single-comment-box">
                                                        <div className="inner-box">
                                                            <figure className="comment-thumb"><img src={AuthorImage1} alt="Product Thumb" /></figure>
                                                            <div className="inner">
                                                                <ul className="rating clearfix">
                                                                    <li><i className="fas fa-star"></i></li>
                                                                    <li><i className="fas fa-star"></i></li>
                                                                    <li><i className="fas fa-star"></i></li>
                                                                    <li><i className="fas fa-star"></i></li>
                                                                    <li><i className="fas fa-star"></i></li>
                                                                </ul>
                                                                <h5>Aleesha Brown, <span>12 Feb, 2024 . 8:00 pm</span></h5>
                                                                <p>Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-box">
                                            <h3>Add Your Comments</h3>
                                            <form id="contact_form" name="contact_form" className="" action="includes/sendmail.php" method="post">
                                                <div className="mb-3">
                                                    <textarea name="form_message" className="form-control required" rows="7" placeholder="Enter Message"></textarea>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <input name="form_name" className="form-control" type="text" placeholder="Enter Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                    <div className="review-box clearfix">
                                                        <p>Your Review</p>
                                                        <ul className="rating clearfix">
                                                            <li><i className="far fa-star"></i></li>
                                                            <li><i className="far fa-star"></i></li>
                                                            <li><i className="far fa-star"></i></li>
                                                            <li><i className="far fa-star"></i></li>
                                                            <li><i className="far fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                    <div className="form-group clearfix">
                                                        <div className="custom-controls-stacked">
                                                            <label className="custom-control material-checkbox">
                                                                <input type="checkbox" className="material-control-input" />
                                                                <span className="material-control-indicator"></span>
                                                                <span className="description"> Save my name, email, and website in this browser for the next time I comment.</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <input name="form_botcheck" className="form-control" type="hidden" value="" />
                                                    <button type="submit" className="theme-btn btn-two" data-loading-text="Please wait..."><span className="btn-title text-white">Submit Comment</span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="related-product">
                <div className="container pt-0 pb-90">
                    <div className="team-five__wrp">
                        <h3>Related Products</h3>
                        <div className="row">
                            {/* Product Block */}
                            <div className="product-block col-lg-3 col-md-6">
                            <div className="inner-box">
                                <div className="image-box">
                                <div className="image"><Link to="/shop-product-details"><img className="w-100" src={RelatedProduct1} alt="Related Product" /></Link></div>
                                <div className="icon-box">
                                    <Link to="/shop-product-details" className="ui-btn"><i className="fa fa-heart"></i></Link>
                                    <Link to="/cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                                </div>
                                </div>
                                <div className="content">
                                <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                                <h4><Link to="/shop-product-details">Headphone</Link></h4>
                                <span className="price">$32.00</span>
                                </div>
                            </div>
                            </div>

                            {/* Product Block */}
                            <div className="product-block col-lg-3 col-md-6">
                            <div className="inner-box">
                                <div className="image-box">
                                <div className="image"><Link to="/shop-product-details"><img className="w-100" src={RelatedProduct2} alt="Related Product" /></Link></div>
                                <div className="icon-box">
                                    <Link to="/shop-product-details" className="ui-btn"><i className="fa fa-heart"></i></Link>
                                    <Link to="/cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                                </div>
                                </div>
                                <div className="content">
                                <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                    className="fa fa-star"></i><i className="fa fa-star"></i></span>
                                <h4><Link to="/shop-product-details">Lagage</Link></h4>
                                <span className="price">$32.00</span>
                                </div>
                            </div>
                            </div>

                            {/* Product Block */}
                            <div className="product-block col-lg-3 col-md-6">
                            <div className="inner-box">
                                <div className="image-box">
                                <div className="image"><Link to="/shop-product-details"><img className="w-100" src={RelatedProduct3} alt="Related Product" /></Link></div>
                                <div className="icon-box">
                                    <Link to="/shop-product-details" className="ui-btn"><i className="fa fa-heart"></i></Link>
                                    <Link to="/cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                                </div>
                                </div>
                                <div className="content">
                                <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                    className="fa fa-star"></i><i className="fa fa-star"></i></span>
                                <h4><Link to="/shop-product-details">Watch</Link></h4>
                                <span className="price">$32.00</span>
                                </div>
                            </div>
                            </div>

                            {/* Product Block */}
                            <div className="product-block col-lg-3 col-md-6">
                            <div className="inner-box">
                                <div className="image-box">
                                <div className="image"><Link to="/shop-product-details"><img className="w-100" src={RelatedProduct4} alt="Related Product" /></Link></div>
                                <div className="icon-box">
                                    <Link to="/shop-product-details" className="ui-btn"><i className="fa fa-heart"></i></Link>
                                    <Link to="/cart" className="ui-btn"><i className="fa fa-shopping-cart"></i></Link>
                                </div>
                                </div>
                                <div className="content">
                                <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                    className="fa fa-star"></i><i className="fa fa-star"></i></span>
                                <h4><Link to="/shop-product-details">SD Card</Link></h4>
                                <span className="price">$32.00</span>
                                </div>
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

export default ProductsDetails;
