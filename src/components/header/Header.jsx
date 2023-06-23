import React from 'react'
import Typewriter from 'typewriter-effect';
import './header.css'
import CTA from './CTA';
import ME from '../../assets/128.jpg'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <>
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Husein Fadhlullah</h1>
        <h5 className="text-light-typewriter">I'm a&nbsp;
            <Typewriter
              options={{
                strings: [
                  'Product Owner',
                  'UX Designer',
                  'Freelance Web Developer'
                ],
                autoStart: true,
                loop: true,
                delay: 110,
              }}
            />
          </h5>
        
          <CTA />
        
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="" />
          </div>

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
      </div>
    </header>
    </>
  )
}

export default Header