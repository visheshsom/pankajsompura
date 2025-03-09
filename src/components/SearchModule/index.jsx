import React from 'react';

function SearchModule({ value, searchToggle }) {

    const SearchPopup = () => {
        const [searchTerm, setSearchTerm] = useState('');
        const [isVisible, setIsVisible] = useState(false);
      
        const handleSearch = (e) => {
          e.preventDefault();
          console.log('Searching for:', searchTerm);
          // Add search logic here
        };
      
        const togglePopup = () => {
          setIsVisible(!isVisible);
        };

    }   
    return (
        <>
      {/* Search Trigger Button */}
      <button className="ui-btn search-btn" onClick={togglePopup}>
        <i className="fa fa-search"></i>
      </button>
      <div className="menu-btns">
          <button className="search-trigger d-none d-lg-block" onClick={togglePopup}>
              <i className="fa-light fa-magnifying-glass"></i>
          </button>
          <button className="menubars" type="button" data-bs-toggle="offcanvas" data-bs-target="#menubar" onClick={togglePopup}>
              <span></span>
              <span></span>
              <span></span>
          </button>
      </div>

      {/* Search Popup */}
      {isVisible && (
              <div className="search-wrap" onClick={togglePopup}>
                <div className="search-inner" onClick={togglePopup}>
                    <i className="fa-light fa-xmark search-close" id="search-close"></i>
                    <div className="search-cell">
                        <form onSubmit={handleSearch}>
                            <div className="search-field-holder">
                                <input type="search" className="main-search-input" value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..."/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
      )}
        </>
    );
}

export default SearchModule;
