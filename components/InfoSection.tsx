import React from 'react'
import Link from 'next/link';

// Info section for home page

// Defining types
interface InfoCardProps {
    title: string;
    content: JSX.Element | string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => (
    <div className='flex flex-col items-center p-8 bg-white border-2 border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
        <h3 className='text-2xl font-semibold mb-4 text-center'>{title}</h3>
        <p className='text-md md:text-lg text-center leading-relaxed'>{content}</p>
    </div>
);

interface InfoSectionProps {
    cards: InfoCardProps[];
}

const InfoSection: React.FC<InfoSectionProps> = ({ cards }) => {
  return (
    <div className='bg-gray-50'>
     <div className='container mx-auto pt-40 pb-36 px-16'>
        <h2 className='text-5xl lg:text-7xl md:text-6xl font-bold text-center mb-12'>Why Choose PearTech?</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {cards.map((card, index) => (
                <InfoCard key={index} title={card.title} content={card.content} />
            ))}
        </div>
    </div>
   </div>
  );
};

export default InfoSection