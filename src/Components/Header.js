import React, { useState } from 'react';
import '../styles/Header.css';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      {/*&#9776;*/}
      </div>
      <ul className={`navlist ${isMenuOpen ? 'open' : ''}`}>
      <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">APS CALCULATOR</a></li>
        <li><a href="#" className="logo">LOGO</a></li>
        <li><a href="#">GALLERY</a></li>
        <li><a href="#">CONTACT US</a></li>
        <li><a href="#">BLOG</a></li>
      </ul>
    </header>
  );
};
export default Header;
