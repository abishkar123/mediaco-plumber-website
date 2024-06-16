import React from 'react'
import './Header.css'
import logo from '../Header/Header_logo.png'

export const Header = () => {
  return (
    <div>
        <header className="header">
            <div className="logo">
                <img src={logo} alt="company_logo" />
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </nav>

            <div className="border-l border-whitesome h-10 vertical_line"></div>
            
            <div className="availability text-sm">
                <span>We're Available</span> {""}
                <span className="status-dot"></span>
                <span>11:12am</span>
            </div>
            <div className="border-l border-whitesome h-10 vertical_line-second"></div>
            <div className="contact-buttons">
                <button className="quote-button">Get a free quote</button>
                <div className="phone-number">1300 00 000</div>
            </div>
        </header>
    </div>
  )
}
