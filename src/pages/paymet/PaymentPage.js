import React from 'react'
import './Paymet.css'
import logo from './logo.png'
import payment_card from './payment-card.png'


export const PaymentPage = () => {
  return (
    <div>
        <div className='payment-div'>
            <div>
                <img  className="logo" src={logo} alt=''/>
            </div>
            <div>
                <p className='text-3xl text-white payment-plan'>Ask about our payment plans</p>
                <p className='text-6xl font-bold text-white pay-later'>Repair now, Pay later</p>
                <div>
                </div>
            </div>
            <div>
            <button className='cont-number text-sm'> 130 000 000</button>
            <button className='customquote text-sm'> Get a free quote</button>
            <img className='payment-card-photo' src={payment_card} alt='payment-card-photo'/>
            </div>


            </div>
            
            <div className='payment-step d-flex'>

             <div>
                    <span className='d-flex p-4 m-3'> 
                    <p className='text-5xl font-bold text-blue-500'>01</p>
                    <p className='font-extrabold p-1'>Do it now 
                    <p className='font-normal'>Big jobs or little jobs, repaired today.</p></p>
                    
                    </span>

                
             </div>

             <div>
                    <span className='d-flex p-4 m-3'> 
                    <p className='text-5xl font-bold text-blue-500'>02</p>
                    <p className='font-extrabold p-1'>Pay later
                    <p className='font-normal'>pay it off in small, affordable installments.</p></p>
                    
                    </span>

                
             </div>

             <div className='p-2'>
                    <span className='d-flex p-4 m-3'> 
                    <p className='text-5xl font-bold text-blue-500'>03</p>
                    <p className='font-extrabold p-1'>No interest ever
                    <p className='font-normal'>Talk to us to find out more.</p></p>
                    
                    </span>

                
             </div>
             <div></div>

            </div>

            

          
        
    </div>
  )
}
