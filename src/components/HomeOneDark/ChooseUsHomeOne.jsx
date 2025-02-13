
import { Link } from 'react-router-dom';
import ChooseShapeimage1 from '../../assets/images/choose/shikhar22.png';
import Chooseimage1 from '../../assets/images/icon/choose-icon1-dark.png';
import Chooseimage2 from '../../assets/images/icon/choose-icon2-dark.png';
import Chooseimage3 from '../../assets/images/choose/choose-image-dark.png';


function ChooseUsHomeOne({ className }) {

    return (
        <>
            <section className={`choose-area pt-120 pb-120 ${className || ""}`}>
                <div className="choose__shape">
                    <img src={ChooseShapeimage1} alt="image"/>
                </div>
                <div className="container">
                    <div className="choose__wrp">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="section-header">
                                    <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">WHY CHOOSE US
                                    </h4>
                                    <h2 className="wow splt-txt" data-splitting>Providing quality your <br /> Interior services</h2>
                                    <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">With over four decades of experience providing solutions to large-scale <br /> enterprises throughout the globe, we offer end-to-end logistics tailored for <br /> specific markets.</p>
                                </div>
                                <div className="choose__content mt-30 mb-50">
                                    <ul className="wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <li><img src={Chooseimage1} alt="icon"/>
                                            <h3>Shilp Shastra</h3>
                                        </li>
                                        <li><img src={Chooseimage2} alt="icon"/>
                                            <h3>Unique Design</h3>
                                        </li>
                                    </ul>
                                </div>
                                <Link to="/page-about" className="btn-one wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">read more</Link>
                            </div>
                            <div className="col-lg-6">
                                <div className="choose__image">
                                    <img src={Chooseimage3} alt="image"/>
                                    <div className="stroke-text">
                                        <h2 className="wow bounceInRight" data-wow-delay="400ms" data-wow-duration="1000ms"> Interior</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ChooseUsHomeOne;
