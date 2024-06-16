import React from 'react'
import './Hero.css'
import homepageImg from '../HeroPage/bg-im.jpg'
import banner from '../HeroPage/technician-banner.png'
import icons from '../HeroPage/plumbing-white.png'
import googlerating from '../HeroPage/rating-google.png'
import facebookrating from '../HeroPage/rating-facebook.png'
import servicerating from '../HeroPage/rating-services.png'

export const HeroPage = () => {
  return (
 
    <div className='hero-section mt-1'>
        
        <div className='main-img-bg'>
        
            <img className='hero-section-img' src={homepageImg} alt='home_page_img'></img>
            <p className='text-7xl font-bold highlight'> YOUR LOCAL <br/> 
            <span className=' text-highlight'>HOT WATER </span>  <br/> EXPERTS</p>

            <div className='hero-features '>
                 <p className='text-2xl font-bold'>Upforont price <br/>
                   <span className='text-xs'>know the price of the job befor we start</span> </p> 

                   <p className='text-2xl font-bold'>Upforont price <br/>
                   <span className='text-xs'>know the price of the job befor we start</span> </p> 

                   <p className='text-2xl font-bold'>Upforont price <br/>
                   <span className='text-xs'>know the price of the job befor we start</span> </p> 
            </div>
        </div>

        <div>
            <img  className="technician-img" src={banner} alt="technician"/>
            <div className='d-flex space-x-2 rating'>
                <img src={facebookrating} alt='Facebook_rating' />
                <img src={googlerating} alt='Google_rating' />
                <img src={servicerating} alt='Customer_rating' />

            </div>
        </div>

    </div>

 
    
  )
}
