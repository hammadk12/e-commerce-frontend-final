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
    <div id='gallery' className='w-full  max-h-[1200px] mx-auto bg-gray-50'>
        <h1 className='text-4xl lg:text-6xl md:text-5xl font-bold text-center pt-10 pb-5'>Gallery</h1>
        <p className='pb-5 text-2xl text-center'>New products. New Designs. New things for you.</p>
         <div className='relative w-full h-[600px]'> {/* Fixed height container */}
         {slides.map((slide, index) => (
          <div 
            key={index} 
            className={
             index === current 
              ? 'opacity-[1] ease-in duration-1000'
              : 'opacity-0'
            }
            style={{ position: 'absolute', inset: 0 }} // Each slide absolutely positioned
          >
            <Image  
              src={slide.image} 
              alt={`Slide ${index}`} 
              width={1440}
              height={600}
              className='object-cover w-full h-full'
            />
          </div>
        ))}
        <button onClick={prevSlide} className='absolute top-[50%] left-[30px] translate-y-[-50%] text-white/70 cursor-pointer select-none z-[2]'>
          <FaArrowCircleLeft size={50} />
        </button>
        <button onClick={nextSlide} className='absolute top-[50%] right-[30px] translate-y-[-50%] text-white/70 cursor-pointer select-none z-[2]'>
          <FaArrowCircleRight size={50} />
        </button>
      </div>
    </div>
  );
};

export default Slider;