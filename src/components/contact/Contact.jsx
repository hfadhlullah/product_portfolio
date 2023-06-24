import './contact.css'
import {MdOutlineEmail, MdWhatsapp} from 'react-icons/md';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e9jpdur', 'template_a372n5k', form.current, 'RERQvN9hHSbwUfn6b')
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>huseinfadhlullah@gmail.com</h5>
            <a href="mailto:huseinfadhlullah@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <MdWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+6285155159094</h5>
            <a href="https://api.whatsapp.com/send?phone=6285155159094" target='_blank'>Send a Message</a>
          </article>
          {/* <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>huseinfadhlullah@gmail.com</h5>
            <a href="mailto:huseinfadhlullah@gmail.com">Send a Message</a>
          </article> */}
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact