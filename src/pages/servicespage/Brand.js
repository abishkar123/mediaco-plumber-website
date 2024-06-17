import React from 'react'
import auuamax from '../servicespage/Brand_img/aquamax.jpg'
import Dux from '../servicespage/Brand_img/DUX.jpg'
import parisi from '../servicespage/Brand_img/parisi.jpg'
import grohe from '../servicespage/Brand_img/grohe.png'
import rheem from '../servicespage/Brand_img/rheem.png'
import thermann from '../servicespage/Brand_img/thermann.png'
import vulcan from '../servicespage/Brand_img/vulcan.jpg'
import './Servicepage.css'



export const Brand = () => {
  return (
    <div>
        <div className=' '>
            <p className='text-2xl font-bold px-16'> We use well known brands including</p>

        </div>

        <div>
            <div className='brand_icons space-x-4'>
            <img className='w-30' src={vulcan} alt='brands_name'/>
            <img src={thermann} alt='brand_name'/>
            <img src={parisi} alt='brand_naem'/>
            <img src={grohe} alt='brand_name'/>
            <img src={Dux} alt='brand_name'/>
            <img src={auuamax} alt='brand_name'/>
            <img src={rheem} alt='brand_name'/>

            </div>
            
        
        </div>

        <div>

        </div>

    </div>
  )
}
