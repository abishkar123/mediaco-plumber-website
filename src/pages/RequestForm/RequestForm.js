import React from 'react'
import './RequestForm.css'
import {Form, Row, Col,Button} from 'react-bootstrap'
import zerodollor from '../RequestForm/zerodollor.png'
import phoneimg from '../RequestForm/phone-hand.png'

export const RequestForm = () => {
  return (
    <div className='request-box'>
      <div  className='page-quote'>
        <p className='font-bold text-6xl'>Request a <span className='text-blue-400'>fast</span><br/> quote today </p>
        <p className='font-sm'>We are industry leaders providing quality plumbing, drainage, hot water,<br/>
         and roofing-related services to our Community of Customers. We’re ready<br/>
        to assist you with all your needs. From routine maintenance to emergency<br/>
        repairs and quality installations, we have you covered.</p>

      </div>

      <div className='request-img'>
        <img className= "no-call-fee-img" src={zerodollor} alt='no_call_fee_service'></img>
        <img  className="phone-img" src={phoneimg} alt='phone_image'></img>

      </div>

      <div>
        <Form className='Form'>
          <div className='d-flex space-x-9 p-4'>
            <p className='text-2xl font-bold'>Describe your 
              <span className='text-blue-400'> plumbing </span>requirement to get a quote</p>
            <p className='text-sm mt-2'> 
            <i className="fa-solid fa-lock"></i>{""}
               Your information is 100% safe and secure</p>
            <p className='text-sm mt-2'>
            <i className="fa-solid fa-lock"></i>{""}You will recieve a response within minutues</p>

          </div>

          <div className='p-3'>
          <Row>
          <Col>
            <Form.Control  className="mb-3" placeholder="Name" />
          </Col>
          <Col>
            <Form.Control placeholder="Phone Number" />
          </Col>
          <Col>
            <Form.Control  className="mb-3" placeholder="Eamil Address" />
          </Col>
          <Col>
            <Form.Control placeholder="Suburb" />
          </Col>
          </Row>
          <Row>
          <Col className='mb-4'>
            <Form.Control placeholder="Service Type" />
          </Col>

          <Col className='mb-4'>
            <Form.Control placeholder="Descibe you Plumbing job"/>
          </Col>
          <Col>
          <button className='bg-blue-400 w-80 h-9 ' type='submit'>Get a free quote</button>
          </Col>
         
         {/* <Col>
         <Button variant="primary" type="submit"> 
        Submit
      </Button>
         </Col>
           */}
          

          </Row>
          </div>




        </Form>
      </div>


    </div>
  )
}
