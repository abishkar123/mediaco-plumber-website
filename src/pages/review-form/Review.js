import React from 'react'
import './ReviewForm.css'
import Testimonial from '../../components/Testimonial';

export const Review = () => {
    const testimonialsData = [
        {
          name: 'John Smith',
          text: 'This is placeholder text.  This is placeholder text.   This is placeholder text. This is placeholder text, This is placeholder text.',
          location: 'Abbotsford'
        },
        {
          name: 'John Smith',
          text: 'This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text.',
          location: 'Five Dock'
        },
        {
          name: 'John Smith',
          text: 'This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text. This is placeholder text.',
          location: 'Ultimo'
        }
      ];
  return (
    <div className='review-div'>
        <div>
            <p className='text-7xl font-extrabold text-center mt-11 p-6'>what our clients say.</p>
            
        </div>
        <div className='d-flex  justify-center'>
        
      {testimonialsData.map((testimonial, index) => (
        <Testimonial
          key={index}
          name={testimonial.name}
          text={testimonial.text}
          location={testimonial.location}
        />
      ))}
    </div>

    </div>
  )
}
