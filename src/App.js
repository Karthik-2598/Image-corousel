import {useState} from "react";
import "./App.css";


const images = [
  "./marek-piwnicki-JurNMrW1T-c-unsplash.jpg",
  "./raffaele-parente-5zePzWNBr14-unsplash.jpg",
  "./marek-piwnicki-p0B0BdplGV0-unsplash.jpg",
  "./marek-piwnicki-1b6llrdAIeU-unsplash.jpg"

];

function App() {
  const [slide, setSlide] = useState(0);

  function nextSlide(){
    setSlide(slide === images.length-1? 0 : slide+1);
  }
  function prevSlide(){
    setSlide(slide === 0? images.length-1: slide-1 );
  }
  return (
    <>
    <div>
      <h2>Images Corousel</h2>
  

    <div className="slider">
      {slide !==0 && (

      <div className="left-arrow" onClick={prevSlide}> ⬅ </div>
      )}

      {slide !== images.length - 1 && (

     
      <div className="right-arrow" onClick={nextSlide}> ⮕ </div>
      )}

     

      {images.map(
        (image,index) =>
        slide === index &&  (
          <div key = {image} className="slide">
            <img src={image} alt="images"/>
            </div>
        )

        
      )}
    </div>
    </div>
    </>
  );
}

export default App;
