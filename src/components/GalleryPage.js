import React, { useState, useEffect } from "react";

function GalleryPage() {
  const [buttons, setButtons] = useState([]);
  const [demo, setDemo] = useState(0);

  function createPaginationBtns() {
    const imageLength = 18;
    const imageNumber = imageLength / 3;

    for (let index = 1; index < imageNumber + 1; index++) {
      // buttons.push([index]);

      setButtons((prevValue) => [...prevValue, index]);
      console.log(index);
    }
  }

  useEffect(() => {
    createPaginationBtns();
  }, []);

  function imageFun(index) {
    let k = index - 1;
    let m = 3;
    let n = 0;
    const first = n + 3 * k;
    const last = m + 3 * k;
    console.log(first, last);
  }
  function changeIndex(buttonName) {
    if (buttonName === "prev") {
      setDemo((prevValue) => prevValue - 1);
    } else {
      setDemo((prevValue) => prevValue + 1);
    }
    console.log(demo);
  }

  return (
    <>
      <button onClick={() => changeIndex("prev")}>prev</button>
      {buttons.map((button) => (
        <button onClick={() => imageFun(button)}>{button}</button>
      ))}

      <button onClick={() => changeIndex("next")}>next</button>
    </>
  );
}

export default GalleryPage;
