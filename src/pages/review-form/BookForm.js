import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export const BookForm = () => {
  return (
    <div className='form-div'>
    <div className='book-div'>
    <div>
        <p className='font-extrabold text-5xl'>Book a {""}
            <span className='text-blue-500'>Plumber</span> near you</p>
    </div>

    <div>
        <Form >
        
          <Row className='mt-3'>
          <Col >
            <Form.Control  placeholder="Full Name*" />
          </Col>
          <Col>
            <Form.Control placeholder="Phone Number*" />
          </Col>
          <Col>
            <Form.Control  className="mb-3" placeholder="Eamil Address*" />
          </Col>
          </Row>
          
          
          <Row>
          <Col>
            <Form.Control placeholder="Suburb" />
          </Col>
          <Col >
            <Form.Control placeholder="Service Type" />
          </Col>

          <Col>
            <Form.Control placeholder="Date & Time"/>
          </Col>
          </Row >
          

          <Row className='mt-3'>
          <Col className="font-bold">
            <Form.Control   placeholder=" Additional Information"/>
          </Col>
          <Col  className='mb-3'>
          <button className='bg-blue-500 w-80 h-9 text-white text-sm font-semibold' type='submit'>Get a free quote</button>
          </Col>

          </Row>

        </Form>
        <div className='d-flex space-x-8 text-xs '>
        <span >
        <i className="fa-solid fa-lock fa-xs" style={{color:"green"}}></i>{" "}
        Your information is 100% safe and secure</span> 
        <span>
      <i className="fa-solid fa-lock fa-xs" style={{color:"green"}}></i>{" "}
      You will recieve a response within minutues</span>
        </div>
       

    </div>

    </div>
    
    <div className='map-box'>
        Map

    </div>
   
    </div>
  )
}
