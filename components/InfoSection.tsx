import React from 'react'
import Link from 'next/link';

// Info section for home page

// Defining types
interface InfoCardProps {
    title: string;
    content: JSX.Element | string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => (
    <div className='flex flex-col items-center p-6 border-2 border-gray-200 rounded-lg shadow-lg'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='mt-4 text-md md:text-lg text-center'>{content}</p>
    </div>
);

interface InfoSectionProps {
    cards: InfoCardProps[];
}

const InfoSection: React.FC<InfoSectionProps> = ({ cards }) => {
  return (
    <div className='container mx-auto py-80 px-16'>
        <h2 className='text-3xl font-bold text-center mb-10'>Why Choose PearTech?</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {cards.map((card, index) => (
                <InfoCard key={index} title={card.title} content={card.content} />
            ))}
        </div>
    </div>
  );
};

export default InfoSection