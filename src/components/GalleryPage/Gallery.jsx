// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import ImagePopup from '../../lib/ImagePopup';

// import BackToTop from '../BackToTop.jsx';
// import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
// import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
// import PageTitle from '../PageTitle.jsx';


// import GalleryImage1 from '../../assets/images/project/project-two-image1.jpg';
// import GalleryImage2 from '../../assets/images/project/project-two-image2.jpg';
// import GalleryImage3 from '../../assets/images/project/project-two-image3.jpg';
// import GalleryImage4 from '../../assets/images/project/project-two-image4.jpg';



// function Gallery() {
//     return (
//         <>

//         <InnerPageHeader />
//         <PageTitle
//             title="Gallery"
//             breadcrumb={[
//                 { link: '/', title: 'Home' },
//                 { li: '/Gallery', title: 'Gallery' },
//             ]}
//          />

//         <section className="faqs-section-home1 innerpage pt-120 pb-90">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-4 col-sm-6 px-3">
//                         <div className="gallery-item mb-30">
//                             <button imageSrc={GalleryImage1} className="image-popup">
//                                 <ImagePopup className="w-100" imageSrc={GalleryImage1} imageAlt="Placeholder Image" />
//                             </button>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6 px-3">
//                         <div className="gallery-item mb-30">
//                             <button imageSrc={GalleryImage2} className="image-popup">
//                                 <ImagePopup className="w-100" imageSrc={GalleryImage2} imageAlt="Placeholder Image" />
//                             </button>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6 px-3">
//                         <div className="gallery-item mb-30">
//                             <button imageSrc={GalleryImage3} className="image-popup">
//                                 <ImagePopup className="w-100" imageSrc={GalleryImage3} imageAlt="Placeholder Image" />
//                             </button>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6 px-3">
//                         <div className="gallery-item mb-30">
//                             <button imageSrc={GalleryImage4} className="image-popup">
//                                 <ImagePopup className="w-100" imageSrc={GalleryImage4} imageAlt="Placeholder Image" />
//                             </button>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6 px-3">
//                         <div className="gallery-item mb-30">
//                             <button imageSrc={GalleryImage1} className="image-popup">
//                                 <ImagePopup className="w-100" imageSrc={GalleryImage1} imageAlt="Placeholder Image" />
//                             </button>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-sm-6 px-3">
//                         <div className="gallery-item mb-30">
//                             <button imageSrc={GalleryImage2} className="image-popup">
//                                 <ImagePopup className="w-100" imageSrc={GalleryImage2} imageAlt="Placeholder Image" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
         
//         <FooterHomeThree />
//         <BackToTop />

//         </>
//     )
// };

// export default Gallery;

import React, { useState, useEffect } from 'react';
import ImagePopup from '../../lib/ImagePopup.jsx';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';

const imageFiles = import.meta.glob('../../assets/images/project/Web_Gallery/*.{jpg,jpeg,png,gif}', { eager: true });

function Gallery() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(null);

    useEffect(() => {
        const loadImages = () => {
            try {
                const loadedImages = Object.entries(imageFiles).map(([path, module]) => ({
                    path,
                    src: module.default
                }));
                setImages(loadedImages);
                setLoading(false);
            } catch (error) {
                console.error("Error loading images:", error);
                setLoading(false);
            }
        };
        loadImages();
    }, []);

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

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
                        {loading ? (
                            <div className="col-12 text-center">
                                <p>Loading gallery images...</p>
                            </div>
                        ) : images.length > 0 ? (
                            images.map((image, index) => (
                                <div className="col-lg-4 col-sm-6 px-3" key={index}>
                                    <div className="gallery-item mb-30">
                                        <button 
                                            onClick={() => handleImageClick(index)}
                                            className="image-popup-trigger"
                                            style={{
                                                padding: 0,
                                                border: 'none',
                                                background: 'transparent',
                                                cursor: 'pointer',
                                                width: '100%',
                                                height: '100%'
                                            }}
                                        >
                                            <img 
                                                src={image.src} 
                                                alt={`Gallery Image ${index + 1}`} 
                                                className="w-100"
                                                style={{ borderRadius: '6px' }}
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p>No images found in the Web_Gallery folder.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {currentImageIndex !== null && (
                <div className="image-popup-overlay">
                    <button 
                        className="close-button"
                        onClick={() => setCurrentImageIndex(null)}
                    >
                        &times;
                    </button>
                    <button className="nav-button prev" onClick={handlePrev}>
                        &#10094;
                    </button>
                    <button className="nav-button next" onClick={handleNext}>
                        &#10095;
                    </button>
                    <div className="popup-content">
                        <img 
                            src={images[currentImageIndex].src} 
                            alt={`Enlarged View`} 
                            className="popup-image"
                        />
                    </div>
                </div>
            )}

            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Gallery;