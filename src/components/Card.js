import React from 'react';
import card_img from '../pages/servicespage/card.png'

const Card = ({ title, icon }) => {
  return (
    <div className="relative w-56 h-56 bg-gray-600 mb-4">
      <div className="absolute bottom-0 left-0 w-90%  flex items-center text-white p-2">
        <div className='icon'>
          <img className='w-6' src={card_img} alt="icons"/>
        </div>
        <div className="w-40 text">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Card;
