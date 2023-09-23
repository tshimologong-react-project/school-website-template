import React,{ useState,useEffect } from "react";
import './gallery.css';
import image1 from './images/blog-img4.jpg'


function Gallery() {
  
  return (
    <>
     <div className="container">
        <h1>School gallery </h1>
        <div className="page-row">
          <div className="gallery_image_rowone">
            <img src={image1} alt="" />
          </div>
          <div className="gallery_image_rowtwo">
             <div className="row_text_one">
                <img src={image1} alt="" />
                <img src={image1} alt="" />
             </div>
             <div className="row_text_two">
                <img src={image1} alt="" />
             </div>
          </div>
        </div>
     </div>
    </>
    
  )
}

export default Gallery