
import React from 'react';
import '../styles/TopHeader.css'; // Import your CSS file
import '../styles/Header.css';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>WELCOME TO SEBITJA <br></br> SECONDARY SCHOOL</h1>
        <p>Welcome to Sebitja a school where Education is the most powerful weapon you can use to change the world.</p>
      </div>
      <div class="scroll-down">
        <a href="#"><i class="ri-arrow-down-s-fill">Scroll Down</i></a>
    </div>
    </section>
  );
};

export default Hero;