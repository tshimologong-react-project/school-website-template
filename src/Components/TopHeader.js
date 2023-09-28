// Header.js
import React, { useState } from 'react';
import '../styles/TopHeader.css'; // Import your CSS file
import '../styles/Header.css';
import '../styles/Hero.css';

const TopHeader = () => {


  return (
    <topheader>
        <div className='userlogins'>
            <a href="#" className="logo1"><p>--Username--</p></a>
            <a href="#" className="logo1"><p>--EmailAddress--</p></a>
        </div>
        <ul className='Topnavlist'>
            <li><a href="#">PORTAL</a></li>
            <li><a href="#">SUBSCRIBE</a></li>  
      </ul>
    </topheader>
  );
};

export default TopHeader;
