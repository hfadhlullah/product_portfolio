import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// core version + navigation, pagination modules:
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae assumenda dolore sit, quidem excepturi laudantium, maxime architecto doloribus autem ut, sapiente expedita omnis molestiae odit in quia nihil'
  },
  {
    avatar: AVTR2,
    name: 'Erick Shore',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae assumenda dolore sit, quidem excepturi laudantium, maxime architecto doloribus autem ut, sapiente expedita omnis molestiae odit in quia nihil'
  },
  {
    avatar: AVTR3,
    name: 'Jon Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae assumenda dolore sit, quidem excepturi laudantium, maxime architecto doloribus autem ut, sapiente expedita omnis molestiae odit in quia nihil'
  },
  {
    avatar: AVTR4,
    name: 'Frederick Patt',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae assumenda dolore sit, quidem excepturi laudantium, maxime architecto doloribus autem ut, sapiente expedita omnis molestiae odit in quia nihil'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review}, index) =>{
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials