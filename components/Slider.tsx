import { useState } from 'react'
import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

type Slide = {
    image: string;
};

type SliderProps = {
    slides: Slide[];
};

const Slider: React.FC<SliderProps> = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCurrent(current === 0 ?  length - 1 : current - 1)
}

if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
        <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
        
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className={
                 index === current 
                  ? 'opacity-[1] ease-in duration-1000'
                  : 'opacity-0'
              }
            >
                <div className='relative flex justify-center p-4'>
                    <button onClick={prevSlide} className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'>
                        <FaArrowCircleLeft size={50} />
                    </button>
                {index === current && (
                    <Image  
                        src={slide.image} 
                        alt={`Slide ${index}`} 
                        width='1440' height='600' 
                        className='object-cover flex justify-center'
                    />
                )}
                <button onClick={nextSlide} className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'>
                    <FaArrowCircleRight size={50} />
                </button>
               </div>
              </div>
            ))}
        </div>
  );
};

export default Slider