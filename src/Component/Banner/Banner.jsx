import React from 'react';
import "./baneer.css"
import BannerImage from '../../asset/banner1.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <h2>Banner</h2>
      <div className='container-banner'>
        <div className='banner-item'>
          <img src={BannerImage} alt='Description of the first banner' />
        </div>
        <div className='banner-item'>
          <img src={BannerImage} alt='Description of the second banner' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
