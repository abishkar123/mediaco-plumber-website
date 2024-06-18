import React from 'react'
import logo from '../paymet/logo.png'

export const QuestionBanner = () => {
  return (
    <div className='banner-div'>

        <div>
            <img className='company_logo' src={logo} alt='company_log'/>
        </div>
        <div>
            <p className='text-3xl font-bold banner-text'>
            At the end of the day, our goal is simple: to <br/>
            provide reliable, exceptional plumbing services <br/>
            that exceed expectations <br/> <br/>
            <p className='font-semibold text-sm'> This dedication to customer satisfaction, along with our experience and technical expertise, is what <br/>
            sets us apart. <br/>
            Get started today with 
           <span className='text-blue-500 underline'> plumbing example</span> </p>
            </p>
        </div>
    </div>
  
)}
