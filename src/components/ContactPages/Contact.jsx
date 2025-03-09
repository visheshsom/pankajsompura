import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';

function Contact() {
    return (
        <>
        <InnerPageHeader />
        <PageTitle
        title="Contact Us"
        breadcrumb={[
            { link: '/', title: 'Home' },
            { li: '/news-details', title: 'Contact' },
        ]}
     />
	<section className="contact-details">
		<div className="container pt-120 pb-120">
            <div className="funfact__wrp">
    			<div className="row">
    				<div className="col-xl-7 col-lg-6">
    					<div className="sec-title">
    						<span className="sub-title">Send us email</span>
    						<h2>Feel free to write</h2>
    					</div>
    					<form id="contact_form" name="contact_form" className="" action="includes/sendmail.php" method="post">
    						<div className="row">
    							<div className="col-sm-6">
    								<div className="mb-3">
    									<input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
    								</div>
    							</div>
    							<div className="col-sm-6">
    								<div className="mb-3">
    									<input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
    								</div>
    							</div>
    						</div>
    						<div className="row">
    							<div className="col-sm-6">
    								<div className="mb-3">
    									<input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
    								</div>
    							</div>
    							<div className="col-sm-6">
    								<div className="mb-3">
    									<input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
    								</div>
    							</div>
    						</div>
    						<div className="mb-3">
    							<textarea name="form_message" className="form-control required" rows="7" placeholder="Enter Message"></textarea>
    						</div>
    						<div className="mb-5">
    							<input name="form_botcheck" className="form-control" type="hidden" value="" />
    							<button type="submit" className="theme-btn btn-two me-2 mb-3 mb-sm-0" data-loading-text="Please wait..."><span className="btn-title text-white">Send message</span></button>
    							<button type="reset" className="theme-btn btn-two"><span className="btn-title text-white">Reset</span></button>
    						</div>
    					</form>
    				</div>
    				<div className="col-xl-5 col-lg-6">
    					<div className="contact-details__right">
    						<div className="sec-title">
    							<span className="sub-title">Need any help?</span>
    							<h2>Get in touch with us</h2>
    							<div className="text">Have questions or need assistance? We’re here to help! Reach out to us for expert guidance on temple architecture, design, and construction. Let’s bring your vision to life with precision and devotion.</div>
    						</div>
    						<ul className="list-unstyled contact-details__info">
    							<li className="d-block d-sm-flex align-items-sm-center ">
    								<div className="icon">
    									<span className="far fa-phone-plus"></span>
    								</div>
    								<div className="text ml-xs--0 mt-xs-10">
    									<h6>Have any question?</h6>
    									<Link to="/tel:980089850"><span>Free</span> (+91) 98251 66726</Link>
    								</div>
    							</li>
    							<li className="d-block d-sm-flex align-items-sm-center ">
    								<div className="icon">
    									<span className="far fa-envelope fa-fw"></span>
    								</div>
    								<div className="text ml-xs--0 mt-xs-10">
    									<h6>Write email</h6>
    									<Link to="/mailto:needhelp@company.com">pankajsompura@pankajsompura.com</Link>
    								</div>
    							</li>
    							<li className="d-flex align-items-start">
									<div className="icon mr-3 flex-shrink-0">
										<span className="far fa-location-dot fa-fw"></span>
									</div>
									<div className="text">
										<h6>Visit anytime</h6>
										<span className="d-block text-break">
										203, 6/1 Takshashila Apartment, Thaltej, Ahmedabad, Gujarat 380059, India
										</span>
									</div>
									</li>
    						</ul>
    					</div>
    				</div>
    			</div>
            </div>
		</div>
	</section>
	{/* <!--Contact Details End--> */}

	{/* <!-- Map Section--> */}
	<section className="map-section">
    <iframe  
        className="map w-100"  
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=TAKSHASHILA%20APARTMENT,%20Thaltej,%20Ahmedabad,%20Gujarat%20380059&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    </iframe>
</section>

	{/* <!--End Map Section--> */}
        <FooterHomeThree />
        <BackToTop />
        </>
    );
}

export default Contact;
