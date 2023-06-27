import React from 'react'
import './footer.css'
import { FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Husein.</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://github.com"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Husein. 2023 All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer