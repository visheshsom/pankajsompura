import React, { useState } from 'react';
import Modal from 'react-modal';
import ImagePopup from '../../lib/ImagePopup';

import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';


import GalleryImage1 from '../../assets/images/project/project-two-image1.jpg';
import GalleryImage2 from '../../assets/images/project/project-two-image2.jpg';
import GalleryImage3 from '../../assets/images/project/project-two-image3.jpg';
import GalleryImage4 from '../../assets/images/project/project-two-image4.jpg';



function Gallery() {
    return (
        <>

        <InnerPageHeader />
        <PageTitle
            title="Gallery"
            breadcrumb={[
                { link: '/', title: 'Home' },
                { li: '/Gallery', title: 'Gallery' },
            ]}
         />

        <section className="faqs-section-home1 innerpage pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 px-3">
                        <div className="gallery-item mb-30">
                            <button imageSrc={GalleryImage1} className="image-popup">
                                <ImagePopup className="w-100" imageSrc={GalleryImage1} imageAlt="Placeholder Image" />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 px-3">
                        <div className="gallery-item mb-30">
                            <button imageSrc={GalleryImage2} className="image-popup">
                                <ImagePopup className="w-100" imageSrc={GalleryImage2} imageAlt="Placeholder Image" />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 px-3">
                        <div className="gallery-item mb-30">
                            <button imageSrc={GalleryImage3} className="image-popup">
                                <ImagePopup className="w-100" imageSrc={GalleryImage3} imageAlt="Placeholder Image" />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 px-3">
                        <div className="gallery-item mb-30">
                            <button imageSrc={GalleryImage4} className="image-popup">
                                <ImagePopup className="w-100" imageSrc={GalleryImage4} imageAlt="Placeholder Image" />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 px-3">
                        <div className="gallery-item mb-30">
                            <button imageSrc={GalleryImage1} className="image-popup">
                                <ImagePopup className="w-100" imageSrc={GalleryImage1} imageAlt="Placeholder Image" />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 px-3">
                        <div className="gallery-item mb-30">
                            <button imageSrc={GalleryImage2} className="image-popup">
                                <ImagePopup className="w-100" imageSrc={GalleryImage2} imageAlt="Placeholder Image" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         
        <FooterHomeThree />
        <BackToTop />

        </>
    )
};

export default Gallery;
