import { useState } from 'react'
import Image from 'next/image';

type Slide = {
    image: string;
};

type SliderProps = {
    slides: Slide[];
};

const Slider: React.FC<SliderProps> = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ?  length - 1 : current - 1)
}

if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

  return (
    <div id='gallery'>
        <h1>Gallery</h1>
        <div> 
            {slides.map((slide, index) => (
              <div key={index} className=''>
              <Image  
                src={slide.image} 
                alt={`Slide ${index}`} 
                width='740' height='60' 
                objectFit='cover'
                className='flex justify-center m-auto'
                />
               </div>
            ))}
        </div>
    </div>
  )
}

export default Slider