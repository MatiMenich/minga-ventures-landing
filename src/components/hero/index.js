import React from 'react'

import './_styles.scss'

import ScrollingBanner from '../scrolling banner'
import Blob from '../blob'

export default function Hero() {
  return (
    <section className='hero'>
      <div className="container">

        <h1>Aliados tempranos de <i className='underline'>fundadores increíbles</i></h1>
        <div>
          <button className='button-cta d-none d-md-inline-flex'>Contáctanos &gt;</button>&nbsp;
          <button className='button-cta'>Postula ahora &gt;</button>
        </div>
      </div>

      <div className='pattern-bg'/>
      <Blob/>
      <ScrollingBanner/>
    </section>
  )
}
