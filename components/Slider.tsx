import React from 'react'
import Image from 'next/image';

type Slide = {
    image: string;
};

type SliderProps = {
    slides: Slide[];
};

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <div id='gallery'>
        <h1>Gallery</h1>
        <div> 
            {slides.map((slide, index) => (
              <Image 
                key={index} 
                src={slide.image} 
                alt={`Slide ${index}`} 
                width='1440' height='600' 
                objectFit='cover'
                />
            ))}
        </div>
    </div>
  )
}

export default Slider