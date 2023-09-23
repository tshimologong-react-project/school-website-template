import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";

function GalleryPage() {
  const [buttons, setButtons] = useState([]);
  
  function createPaginationBtns() {
    const imageLength = 18;
    const imageNumber = imageLength / 3;
    
    let test =[]
    for (let index = 1; index < imageNumber + 1; index++) {
      test.push([index]);
    }
    setButtons(test)
  }
  useEffect(() => {
    createPaginationBtns();
  }, []);

  let demo = [1]

  function imageFun(index) {
    demo = index;
    let k = index - 1;
    let m = 3;
    let n = 0;
    const first = n + 3 * k;
    const last = m + 3 * k;
    console.log(first, last);
  }
  
  function changeIndex(buttonName) {
    if (buttonName === "prev") {
      demo <= 1 ? demo =+ 7: demo--;
    }
    if(buttonName === "next"){
      demo >= 7 ? demo =+ 1: demo++; 
    } 
    imageFun(demo);
  }
  
  return (
    <>
      <button onClick={() => changeIndex("prev")}>prev</button>
      {buttons.map((button,id)=>(<button key={id} onClick={() => imageFun(button)}>{button}</button>
      ))}
      <button onClick={() => changeIndex("next")}>next</button>
    </>
  );
}

export default GalleryPage;
