import React from 'react';
import './about.css';

import ME from '../../assets/127.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="div about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>

          <p>I am a recent graduate of the Master of Management Information Systems program with a strong ambition to excel as a digital problem solver. As a collaborative team player, I possess excellent communication skills and passionate about continuous improvement. I enthusiastically embrace the Agile methodology to deliver groundbreaking solutions.</p>
          <p>Currently employed at <a href="https://naavee.co.id" target='_blank'>Naavee.co.id</a>, I have achieved success in developing an ERP web application called "HAF"to four companies in Indonesia that caters specifically to the shipping line industry in Indonesia.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About