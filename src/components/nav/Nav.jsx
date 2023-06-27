import React from 'react'
import './nav.css'
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineHistory,
  AiOutlineProject,
  AiOutlineContacts
} from 'react-icons/ai'

import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <div className='tooltip'> 
        <span className="tooltip-text">Home</span>
        <a href="#" 
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}>
          <AiOutlineHome/>
        </a>
      </div>
      <div className='tooltip'>
        <span className="tooltip-text">About</span>
        <a href="#about" 
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}>
          <AiOutlineUser/>
        </a>
      </div>
      {/* <a href="#experience" 
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}>
        <AiOutlineHistory/>
      </a>
      <a href="#services" 
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}>
        <AiOutlineProject/>
      </a> */}
      <div className='tooltip'>
        <span className="tooltip-text">Portfolio</span>
        <a href="#portfolio" 
          onClick={() => setActiveNav('#portfolio')}
          className={activeNav === '#portfolio' ? 'active' : ''}>
          <AiOutlineProject/>
        </a>
      </div>
      <div className="tooltip">
        <span className="tooltip-text">Contact</span>
        <a href="#contact" 
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}>
          <AiOutlineContacts/>
        </a>
      </div>
    </nav>
  )
}

export default Nav