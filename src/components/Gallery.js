import React,{ useState,useEffect } from "react";

function Gallery() {
 

  

  function imageSlide(nameofButton){
    setimageIndex(preValue => preValue +=3)    
    setimageIndexTwo(preValueOne => preValueOne +=3)
    if (imageIndex === 0 && imageIndexTwo === 3)
    {
        findImages()
    }

  }
 
  return (
    <>
    {
        imageToDisplay.map(imageList =>(
            <div>
                {imageList}
            </div>
        ))
    }
    <button onClick={()=>imageSlide('button1')} >1</button>
    </>
    
  )
}

export default Gallery