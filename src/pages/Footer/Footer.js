import React from 'react'
import './Footer.css'
import logo from './logo.png'

export const Footer = () => {
  return (
    <div className='footer-div'>
        <div className=' text-white'>
            <div>
            <img  className="footer-logo" src={logo} alt='company_logo' />
            </div>
            <div className='service-div'>
                <p className='text-2xl font-bold '>Services</p>
                
                <span className='text-xs font-normal'>
                    <p >Blocked Dranis</p>
                    <p>Hot Water</p>
                    <p>Repairs & Maintenance</p>
                    <p>view All Services</p>
                </span>
                
            </div>
            <div className='link-dev'>
                <p className='text-2xl font-bold'>Quick link</p>
                <span className='text-xs font-normal'>
                    <p>Services</p>
                    <p>About us</p>
                    <p>FAQ</p>
                </span>
                
            </div>

            <div className='contact-div'>
                <p className='text-2xl font-bold'>Contact us</p>
                <span className='text-xs font-normal'>
                    <p>P: 1300 000 000</p>
                    <p>E:info@plumber.com.au</p>
                    <buttom className="quote-footer">Get a free quote</buttom>
                </span>
                
                
            </div>
          

        </div>
        
        <div className='style-hr'> 
        </div>

        <div className='text-white text-xs '>
            <p className='position: absolute bottom-9 left-48'>@2023. All right reserved. Here's our Team and conditions and Privacy Polcy</p>
            <p className='position: absolute bottom-9 right-28'>Services by</p>
        </div>

    </div>
  )
}
