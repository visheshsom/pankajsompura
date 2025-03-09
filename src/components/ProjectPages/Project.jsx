// import React from 'react';
// import { Link } from 'react-router-dom';
// // Importing the image files
// import ProjectImage1 from '../../assets/images/project/project-two-image1.jpg';
// import ProjectImage2 from '../../assets/images/project/project-two-image2.jpg';
// import ProjectImage3 from '../../assets/images/project/project-two-image3.jpg';
// import ProjectImage4 from '../../assets/images/project/project-two-image4.jpg';



// function Project() {
//     return (
//         <>
// 	<section className="project-three-area pt-120 pb-120">
//         <div className="container">
//             <div className="project-two__wrp">
//                 <div className="row g-4 align-items-center">
//                     <div className="col-lg-6">
//                         <div className="project-two__item">
//                             <div className="project-two__image">
//                                 <Link to="/page-project-details" className="wow imageUpToDown"><img src={ProjectImage1} alt="image"/></Link>
//                             </div>
//                             <div className="project-three__content mt-25">
//                                 <h5><Link to="/page-project-details">RESTAURANT</Link></h5>
//                                 <span>Lifestyle</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <div className="project-two__item-sm float-end">
//                             <div className="project-two__image">
//                                 <Link to="/page-project-details" className="wow imageUpToDown"><img src={ProjectImage2} alt="image"/></Link>
//                             </div>
//                             <div className="project-three__content mt-25">
//                                 <h5><Link to="/page-project-details">INTERIOR</Link></h5>
//                                 <span>Lifestyle</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row g-4 align-items-center mt-60">
//                     <div className="col-lg-6">
//                         <div className="project-two__item-sm">
//                             <div className="project-two__image">
//                                 <Link to="/page-project-details" className="wow imageUpToDown"><img src={ProjectImage3} alt="image"/></Link>
//                             </div>
//                             <div className="project-three__content mt-25">
//                                 <h5><Link to="/page-project-details">DESIGN HOME</Link></h5>
//                                 <span>Lifestyle</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <div className="project-two__item">
//                             <div className="project-two__image">
//                                 <Link to="/page-project-details" className="wow imageUpToDown"><img src={ProjectImage4} alt="image"/></Link>
//                             </div>
//                             <div className="project-three__content mt-25">
//                                 <h5><Link to="/page-project-details">MY PLACE</Link></h5>
//                                 <span>Living Rooms</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//         </>
//     );
// }

// export default Project;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Project() {
    const [projectImages, setProjectImages] = useState([]);

    useEffect(() => {
        // Function to import all images from the ForWebSite folder
        const importAllImages = async () => {
            try {
                // Using Vite's import.meta.glob to dynamically import all PNG images from the folder
                const imageFiles = import.meta.glob('/src/assets/images/project/ForWebSite/*.png');
                const imagePromises = [];
                
                // Debug
                console.log('Image paths found:', Object.keys(imageFiles));

                for (const path in imageFiles) {
                    // Push a promise that resolves to an object with the path and module
                    imagePromises.push(
                        imageFiles[path]().then(module => {
                            // Extract the filename from the path (without extension)
                            const filename = path.split('/').pop().replace('.png', '');
                            
                            // Handle comma separation for title and location
                            let title = filename;
                            let location = '';
                            
                            if (filename.includes(',')) {
                                const parts = filename.split(',');
                                title = parts[0];
                                location = parts.slice(1).join(',').trim();
                            }
                            
                            // Convert underscores to spaces in both title and location
                            title = title.replace(/_/g, ' ');
                            location = location.replace(/_/g, ' ');
                            
                            // Debug
                            console.log('Processed image:', { path, filename, title, location });
                            
                            return {
                                src: module.default,
                                path: path,
                                title: title,
                                location: location
                            };
                        })
                    );
                }

                // Wait for all images to be loaded
                const images = await Promise.all(imagePromises);
                console.log('All images loaded:', images);
                setProjectImages(images);
            } catch (error) {
                console.error('Error loading project images:', error);
            }
        };

        importAllImages();
    }, []);

    // Function to render project items in rows of 2
    const renderProjectRows = () => {
        const rows = [];
        
        for (let i = 0; i < projectImages.length; i += 2) {
            // For each pair of images, create a row
            const row = (
                <div className="row g-4 align-items-center mt-60" key={`row-${i}`}>
                    {/* First column */}
                    {i < projectImages.length && (
                        <div className="col-lg-6">
                            <div className={i % 4 === 0 ? "project-two__item" : "project-two__item-sm"}>
                                <div className="project-two__image">
                                    <Link to="/page-project-details" className="wow imageUpToDown">
                                        <img src={projectImages[i].src} alt="image" />
                                    </Link>
                                </div>
                                <div className="project-three__content mt-25">
                                    <h5><Link to="/page-project-details">{(projectImages[i].title || '').toUpperCase()}</Link></h5>
                                    <span>{projectImages[i].location || "Lifestyle"}</span>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Second column */}
                    {i + 1 < projectImages.length && (
                        <div className="col-lg-6">
                            <div className={(i + 1) % 4 === 0 ? "project-two__item" : "project-two__item-sm float-end"}>
                                <div className="project-two__image">
                                    <Link to="/page-project-details" className="wow imageUpToDown">
                                        <img src={projectImages[i + 1].src} alt="image" />
                                    </Link>
                                </div>
                                <div className="project-three__content mt-25">
                                    <h5><Link to="/page-project-details">{(projectImages[i + 1].title || '').toUpperCase()}</Link></h5>
                                    <span>{projectImages[i + 1].location || "Lifestyle"}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
            
            rows.push(row);
        }
        
        return rows;
    };

    return (
        <>
            <section className="project-three-area pt-120 pb-120">
                <div className="container">
                    <div className="project-two__wrp">
                        {projectImages.length > 0 ? (
                            renderProjectRows()
                        ) : (
                            <div className="text-center">Loading project images...</div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Project;