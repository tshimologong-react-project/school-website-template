// packages imports
import React, { useState, useEffect } from "react";
// styles imports
import "./gallery.css";
// components imports

// images import
import img1 from "../assets/IMG1.JPG";
import img2 from "../assets/IMG2.JPG";
import img3 from "../assets/IMG3.JPG";
import img4 from "../assets/IMG4.JPG";
import img5 from "../assets/IMG5.JPG";
import img6 from "../assets/IMG6.JPG";

function GalleryPage() {
  /* Global variables */

  // array for images
  const Images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img2,
  ];

  // buttons state
  const [buttons, setButtons] = useState([]);
  // sliced images state
  const [slicedImages, setSlicedImages] = useState([]);
  // variables to determine image array length
  const imageLength = Images.length;
  // variables to determine number of images to display
  const imageNumber = Math.round(imageLength / 4);
  console.log(imageNumber);
  // variable to hold button index
  let buttonIndex = [1];

  // pagination functions
  function createPaginationBtns() {
    let buttonArray = [];
    for (let index = 1; index < imageNumber + 1; index++) {
      buttonArray.push([index]);
    }
    setButtons(buttonArray);
  }

  // useEffect to call createPaginationBtns function
  useEffect(() => {
    createPaginationBtns();
  }, []);

  // function to slice images for for display
  function imageSlicer(first, last) {
    setSlicedImages(Images.slice(first, last));
    console.log(slicedImages);
  }

  // function to determine first and last values for slicer
  function imageFun(index) {
    buttonIndex = index;
    let k = index - 1;
    let m = 4;
    let n = 0;
    const first = n + 4 * k;
    const last = m + 4 * k;
    // call image slicer function
    imageSlicer(first, last);
    console.log(first, last);
  }

  // fucntion to change index for next and prev buttons
  function changeIndex(buttonName) {
    if (buttonName === "prev") {
      buttonIndex <= 1 ? (buttonIndex = +imageNumber) : buttonIndex--;
    }
    if (buttonName === "next") {
      buttonIndex >= imageNumber ? (buttonIndex = +1) : buttonIndex++;
    }
    imageFun(buttonIndex);
  }

  return (
    <>
      {/* images display */}

      <div className="container">
        <h1>School gallery </h1>
        <div className="page-row">
          <div className="gallery_image_rowone">
            <img src={slicedImages[0]} alt="" />
          </div>
          <div className="gallery_image_rowtwo">
            <div className="row_text_one">
              <img src={slicedImages[1]} alt="" />
              <img src={slicedImages[2]} alt="" />
            </div>
            <div className="row_text_two">
              <img src={slicedImages[3]} alt="" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      {/* buttons */}
      <button onClick={() => changeIndex("prev")}>prev</button>
      {buttons.map((button, id) => (
        <button key={id} onClick={() => imageFun(button)}>
          {button}
        </button>
      ))}
      <button onClick={() => changeIndex("next")}>next</button>
    </>
  );
}

export default GalleryPage;
