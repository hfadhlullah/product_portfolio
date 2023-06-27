import React from 'react'
import Typewriter from 'typewriter-effect';
import './header.css'
import CTA from './CTA';
import ME from '../../assets/128.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <>
    <header>
      <div className="container header__container">
        <h1>Hello, I'm Husein Fadhlullah</h1>
        <h2 className="header__type text-light-typewriter">I'm&nbsp;
            <Typewriter
              options={{
                strings: [
                  'Product Owner',
                  'UX Designer',
                  'Freelance Developer'
                ],
                autoStart: true,
                loop: true,
                delay: 150,
              }}
            />
          </h2>
        
          <CTA />
        
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="" />
          </div>

          <a href="#about" className="scroll__down">
            Read More
          </a>
      </div>
    </header>
    </>
  )
}

export default Header