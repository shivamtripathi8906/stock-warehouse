import React from 'react';
import "../css/Banner.css";
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className='bannerMainContainer'>
      <div className='bannerCoverContainer'>
          <div className='bannerContentContainer page-width'>
            <p className='bannerHeading'> Supply Chain Solutions to Design, Execute & Optimise your Inventory Flow</p>
            <p className='bannerPara'>We are your Tech-enabled partner for storage & movement of good across India and Globe.</p>
            <Link to="/home">Talk To Us</Link>
          </div>
      </div>
    </div>
  )
}

export default Banner