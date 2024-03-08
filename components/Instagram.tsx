import React from 'react'
import photo1 from '../public/photo1.avif'
import photo2 from '../public/photo2.avif'
import photo3 from '../public/photo3.avif'
import photo4 from '../public/photo4.avif'
import photo5 from '../public/photo5.avif'
import photo6 from '../public/photo6.avif'
import Instagramimg from '../components/Instagramimg';

type socialImg = {
    image: string;
};

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow us on Instagram</p>
        <p className='pb-4'>PearTech</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <Instagramimg socialImg={photo1}/>
            <Instagramimg socialImg={photo2}/>
            <Instagramimg socialImg={photo3}/>
            <Instagramimg socialImg={photo4}/>
            <Instagramimg socialImg={photo5}/>
            <Instagramimg socialImg={photo6}/>
        </div>
    </div>
  )
}

export default Instagram