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
      <a href="#" 
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome/>
      </a>
      <a href="#about" 
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser/>
      </a>
      <a href="#experience" 
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}>
        <AiOutlineHistory/>
      </a>
      <a href="#services" 
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}>
        <AiOutlineProject/>
      </a>
      <a href="#contact" 
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <AiOutlineContacts/>
      </a>
    </nav>
  )
}

export default Nav