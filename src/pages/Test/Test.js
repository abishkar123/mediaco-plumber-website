import React from 'react'
import icon from '../servicespage/card.png'
import './Test.css'
import { Row, Col} from 'react-bootstrap';

export const Test = () => {
    // const cards = [
    //     { icon: icon, text: 'BLOCKED DRAINS' },
    //     { icon: icon, text: 'LEAKING TAP' },
    //     { icon: icon, text: 'HOT WATER ISSUES' },
    //     { icon: icon, text: 'TOILET REPAIRS' },
    //     { icon: icon, text: 'PIPE RELINING' },
    //     { icon: icon, text: 'GAS FITTING' },
    //     { icon: icon, text: 'ROOF PLUMBING' },
    //     { icon: icon, text: 'EMERGENCY PLUMBING' }
    //   ];
  return (
    <div className="App">
      <div className="card">
        <div className="icon">
          <img src={icon} alt="Icon" />
        </div>
        <div className="text">
          BLOCKED DRAINS
        </div>
      </div>
    </div>
  )
}
