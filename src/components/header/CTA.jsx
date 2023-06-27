import React from 'react'
import CV from '../../assets/CV_Husein_Fadhlullah_2023.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href={CV} download className='btn'>Download Portfolio</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA