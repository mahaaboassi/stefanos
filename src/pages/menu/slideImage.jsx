import { useEffect, useState } from "react";

function SlideImage({imagesslide}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages ] = useState(0);
    useEffect(()=>{setImages(imagesslide)},[imagesslide])
    

    // Auto-change image every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);
    
    return ( <div className="slider  h-52 md:h-80">
        {images.length>0 && images.map((image, index) => (
            <div
            key={index}
            className={`slide ${index == currentIndex ? "active" : ""}`}
            >
            <img className=" w-52 sm:w-52 lg:w-96" src={image} alt={`Slide ${index + 1}`} />
            </div>
        ))}
        </div> );
}

export default SlideImage;