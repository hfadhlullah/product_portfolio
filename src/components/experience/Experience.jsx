import React from 'react'
import './experience.css'

import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__product">
          <h3>Product Management</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill />
            </article>
          </div>
        </div>
        <div className="experience__designer">

        </div>
        <div className="experience__developer">

        </div>
      </div>
    </section>
  )
}

export default Experience