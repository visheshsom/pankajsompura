import React from 'react';

function Loader() {
    return (
        <div id="preloader">
            <div className="animation-preloader">
                <div className="spinner"></div>
                <div className="txt-loading">
                    <span data-text-preloader="P" className="letters-loading">
                        P
                    </span>
                    <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                    <span data-text-preloader="N" className="letters-loading">
                        N
                    </span>
                    <span data-text-preloader="K" className="letters-loading">
                        K
                    </span>
                    <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                    <span data-text-preloader="J" className="letters-loading">
                        J
                    </span>
                    {/* Adding space between PANKAJ and SOMPURA */}
                    <span className="letters-loading">&nbsp;</span>
                    <span data-text-preloader="S" className="letters-loading">
                        S
                    </span>
                    <span data-text-preloader="O" className="letters-loading">
                        O
                    </span>
                    <span data-text-preloader="M" className="letters-loading">
                        M
                    </span>
                    <span data-text-preloader="P" className="letters-loading">
                        P
                    </span>
                    <span data-text-preloader="U" className="letters-loading">
                        U
                    </span>
                    <span data-text-preloader="R" className="letters-loading">
                        R
                    </span>
                    <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                </div>
                <p className="text-center">Loading...</p>
            </div>
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Loader;
