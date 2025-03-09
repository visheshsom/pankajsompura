import React from 'react';
import { Link } from 'react-router-dom';
import PageTitleBackground from '../assets/images/background/page-title-bg.jpg'; // Adjust the path as needed

const HeroPageTitle = ({ title, breadcrumb }) => {
  return (
    <section
      className="page-title"
      style={{ backgroundImage: `url(${PageTitleBackground})` }}
    >
      <div className="auto-container">
        <div className="title-outer text-center position-relative">
          <h1 className="title">{title}</h1>
          <ul className="page-breadcrumb">
            {breadcrumb.map((item, index) => (
              <li key={index}>
                {item.link ? (
                  <Link to={item.link}>{item.title}</Link>
                ) : (
                  item.title
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroPageTitle;
