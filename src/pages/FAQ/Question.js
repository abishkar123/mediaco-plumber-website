import React from 'react';
import Accordion from '../../components/Accordion';
import { Col, Row } from 'react-bootstrap';
import './Question.css'



const Question = () => {
  return (
    <div className=' w-auto h-full p-4 m-5'>
        <div className='p-5'>
        <p className='text-5xl font-extrabold'>Plumber Sydney
            <span className='text-blue-500'> FAQs</span> </p>
      <p className='font-medium'>
        We are industry leaders providing quality plumbing, drainage, hot water, and roofing-related services to our Community of Customers. We’re ready to assist you with all your needs. From routine maintenance to emergency repairs and quality installations, we have you covered.
      </p>
        </div>
     
      <div className='font-medium '>
      <Row >
        <Col >
        <Accordion title="What types of services do you offer?" content="We offer a wide range of services including plumbing, drainage, hot water, and roofing-related services." />
        </Col>

        <Col>
        <Accordion title="How do I schedule an appointment?" content="You can schedule an appointment by calling us at 1300 000 000 or by using our online booking system." />
        </Col>
        </Row>
        <Row> 
            <Col> <Accordion title="What areas do you service?" content="We service all areas in Sydney and surrounding suburbs." />
        </Col>
        <Col><Accordion title="Do you provide emergency plumbing services?" content="Yes, we provide 24/7 emergency plumbing services." />
        </Col>
        </Row>
        <Row>
        <Col><Accordion title="How do you charge for your services?" content="We charge based on the type and scope of the service. Contact us for a detailed quote." />
        </Col>  
        <Col><Accordion title="Are you licensed and insured?" content="Yes, we are fully licensed and insured for all the services we provide." />
        </Col>       
          
        </Row>
      </div>      
      <div>
      <div className='question-contact-number text-sm'> 130 000 000</div>
      <div className='quote text-sm p-2'> Get a free quote</div>
        
      </div>

      
    </div>
  );
};

export default Question;
