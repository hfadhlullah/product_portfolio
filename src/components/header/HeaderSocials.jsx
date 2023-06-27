import React from 'react'
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/husein-fadhlullah-79700b91/" target="_blank">
            <FaLinkedin />
        </a>
        <a href="https://instagram.com/huseinf" target="_blank">
            <FaInstagramSquare />
        </a>
        <a href="https://github.com/hfadhlullah" target="_blank">
            <FaGithubSquare />
        </a>
    </div>
  )
}

export default HeaderSocials