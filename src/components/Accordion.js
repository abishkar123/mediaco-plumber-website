import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <div
        onClick={toggleAccordion}
        style={{ padding: '10px', cursor: 'pointer',  display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}
      >
        <span>{title}</span>
        <span className='text-2xl font-bold'>+</span>
      </div>
      {isOpen && (
        <div style={{ padding: '6px', borderTop: '1px solid #ddd' }}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
