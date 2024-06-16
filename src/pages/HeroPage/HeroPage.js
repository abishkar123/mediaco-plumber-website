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
        
       


{/* 
        <section className="hero-section" style={{ backgroundImage: `url(${homepageImg})` }}>
            <div className="hero-content">
                <h1>Your Local <span className="highlight">Hot Water Experts</span></h1>
                <ul className="hero-features">
                    <li>
                        <img 
                        // src={plumbingWhiteIcon} 
                        alt="Upfront Pricing" />
                        <div>
                            <h3>Upfront pricing</h3>
                            <p>Know the price of the job before we start.</p>
                        </div>
                    </li>
                    <li>
                        <img
                        //  src={noCallOutIcon} 
                         alt="$0 Call Out" />
                        <div>
                            <h3>$0 Call out</h3>
                            <p>No call out fees</p>
                        </div>
                    </li>
                    <li>
                        <img 
                        // src={onlineBookingIcon} 
                        alt="$50 off for online bookings" />
                        <div>
                            <h3>$50 off for online bookings</h3>
                            <p>Book online to receive a discount</p>
                        </div>
                    </li>
                </ul>
                <div className="ratings">
                    <div className="rating">
                        <h3>4.9</h3>
                        <p>Average Rating</p>
                        <img 
                        // src={facebookIcon} 
                        alt="Facebook" />
                    </div>
                    <div className="rating">
                        <h3>5.0</h3>
                        <p>Average Rating</p>
                        <img 
                        // src={googleIcon} 
                        alt="Google" />
                    </div>
                    <div className="rating">
                        <h3>24h</h3>
                        <p>Emergency Services</p>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src={banner} alt="Technician" />
            </div>
        </section> */}

    </div>
  )
}
