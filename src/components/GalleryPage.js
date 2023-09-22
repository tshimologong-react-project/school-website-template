import React, { useState } from "react";

function GalleryPage() {
  const [buttons, setButtons] = useState([]);
  const imageLength = 6;
  const imageNumber = imageLength / 3;

  for (let index = 1; index < imageNumber + 1; index++) {
    buttons.push([index]);
  }

  function imageFun(index) {
    let k = index - 1;
    let m = 3;
    let n = 0;
    const first = n + 3 * k;
    const last = m + 3 * k;
    console.log(first, last);
  }

  return (
    <>
      {buttons.map((button) => (
        <button onClick={() => imageFun(button)}>{button}</button>
      ))}
    </>
  );
}

export default GalleryPage;
