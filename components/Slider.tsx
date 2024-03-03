import React from 'react'

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
                <img key={index} src={slide.image} alt={`Slide ${index}`} />
            ))}
        </div>
    </div>
  )
}

export default Slider