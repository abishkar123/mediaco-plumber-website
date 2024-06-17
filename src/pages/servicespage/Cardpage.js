import React from 'react';
import Card from '../../components/Card';


const Cardpage = () => {
  const cards = [
    { title: "BLOCKED DRAINS"},
    { title: "HOT WATER "},
    { title: "LEAKING PIPES" },
    { title: "GAS FITTING" },
    { title: "LEAKING TAPS"},
    { title: "PIPE RELINING" },
    { title: "LEAKING TOILETS" },
    { title: "LEAK DETECTION" },
  ];

  return (
    <div className="min-h-screen mt-3 p-4">
      <div className=" mt-20  p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {cards.map((card, index) => (
          <Card key={index} title={card.title}  />
        ))}
      </div>
    </div>
  );
};

export default Cardpage;
