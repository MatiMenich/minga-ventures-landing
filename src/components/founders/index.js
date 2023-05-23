import React from 'react'

import './_styles.scss'
import ScrollingBanner from '../scrolling banner'
import Blob from '../blob'
import founder1Img from './founder1.jpg'
import founder2Img from './founder2.jpg'
import founder3Img from './founder3.jpg'
import founder4Img from './founder4.jpg'

export default function Founders() {

  const foundersList = [
    {
      name: 'Chipa Mogli',
      image: founder1Img,
      company: 'Examedi',
      linkedinProfile: 'https://www.linkedin.com/in/chipa-mogli/',
    },
    {
      name: 'La Mojo Jojo',
      image: founder2Img,
      company: 'Fintoc',
      linkedinProfile: 'https://www.linkedin.com/in/la-mojo-jojo/',
    },
    {
      name: 'El Tonto Wn',
      image: founder3Img,
      company: 'Plutto',
      linkedinProfile: 'https://www.linkedin.com/in/el-tonto-wn/',
    },
    {
      name: 'La Calila',
      image: founder4Img,
      company: 'Toku',
      linkedinProfile: 'https://www.linkedin.com/in/la-calila/',
    },
    {
      name: 'Tu Ex',
      image: founder2Img,
      company: 'Examedi',
      linkedinProfile: 'https://www.linkedin.com/in/tu-ex/',
    },
    {
      name: 'Tu Papá',
      image: founder1Img,
      company: 'Fintoc',
      linkedinProfile: 'https://www.linkedin.com/in/tu-papa/',
    },
  ]
  return (
    <section className="founders" id="founders">
      {/* <Blob className="blob1"/> */}
      <Blob className="blob2"/>

      <div className="container">
        <div className='founders__description'>
          <h2>Nuestros fundadores</h2>
          <p>Acá tamos pa lo que quiera compare, ud. diga nomá y le ponemoh weno. Pero weno weno, la pulenta. Si no entramoh en prolema y ahí quedaste. Gil ql. Sabi que má, no te pienso poner niuna wea de plata. Saco wea. Tonto wn leyendo esta weá. </p>
          <a href="#a">Conoce a todos &gt;</a>
        </div>
        <div className='founders__list'>
          {
            foundersList.map((founder) =>
            <a className="founder-card" key={founder.name} href={founder.linkedinProfile} target='_blank' rel="noreferrer">
              <img src={founder.image} alt=""/>
              <p>{founder.name}</p>
              <small>{founder.company}</small>
            </a>
            )
          }

        </div>
      </div>

      <div className='pattern-bg'/>
      <ScrollingBanner reverse={true} />
    </section>
  )
}
