// packages imports
import React, { useState, useEffect } from "react";

// components imports

// images import
import img1 from "../assets/IMG1.JPG";
import img2 from "../assets/IMG2.JPG";
import img3 from "../assets/IMG3.JPG";
import img4 from "../assets/IMG4.JPG";
import img5 from "../assets/IMG5.JPG";
import img6 from "../assets/IMG6.JPG";

function GalleryPage() {
  /* global variables */

  // buttons state
  const [buttons, setButtons] = useState([]);

  // variables to determine image array length and number of images to display
  const imageLength = Images.length;
  // variables to determine number of images to display
  const imageNumber = Math.round(imageLength / 4);
  console.log(imageNumber);
  // variable to hold button index
  let buttonIndex = [1];

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

  // function to determine first and last values for slicer
  function imageFun(index) {
    buttonIndex = index;
    let k = index - 1;
    let m = 4;
    let n = 0;
    const first = n + 4 * k;
    const last = m + 4 * k;

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
      {/* buttons */}
      <button onClick={() => changeIndex("prev")}>prev</button>
      {buttons.map((button, id) => (
        <button key={id} onClick={() => imageFun(button)}>
          {button}
        </button>
      ))}
      <button onClick={() => changeIndex("next")}>next</button>
      <br />
      <br />
    </>
  );
}

export default GalleryPage;
