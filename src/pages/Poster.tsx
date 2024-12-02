import React from 'react';
import poster1 from '../assets/poster1.webp';
import poster2 from '../assets/poster2.webp';

interface PosterProps {
  img: number;
  title: string;
  title2: string;
}

const Poster: React.FC<PosterProps> = ({ img, title, title2 }) => {
  return (
   <div className='max-md:px-4'>
     <div
      className={`mt-24 max-md:px-4 lg:container mx-auto h-96 flex items-end ${img === 1 ? 'justify-end' : "justify-start"} rounded-2xl p-6 mb-24`}
      style={{
        backgroundImage: `${img === 1 ? `url(${poster1})` : `url(${poster2})`}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-white space-y-2"> 
        <h1 className="text-left text-[32px] max-md:text-[16px] font-black	">{title}</h1>
        <h1 className="text-left text-[32px] max-md:text-[16px] font-black	">{title2}</h1>
      </div>
    </div>
   </div>
  );
};

export default Poster;
