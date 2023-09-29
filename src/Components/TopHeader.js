import React, { useState } from 'react';
import '../styles/TopHeader.css'; 
const TopHeader = () => {
  return (
    //The top Navigation Bar that contains the portal
    < div className='topheader'>
        <div className='userlogins'>
            <a href="#" className="logo1"><p>--Username--</p></a>
            <a href="#" className="logo1"><p>--EmailAddress--</p></a>
        </div>
        <ul className='Topnavlist'>
            <li><a href="#">PORTAL</a></li>
            <li><a href="#">SUBSCRIBE</a></li>  
      </ul>
    </div>
  );
};
export default TopHeader;

