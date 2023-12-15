import React from 'react'

import './_styles.scss'

import fintocLogo from './fintoc-logo.png'
import neatLogo from './neat-logo.png'
import xpenditLogo from './xpendit-logo.png'
import getxerpaLogo from './getxerpa-logo.png'

export default function Portfolio() {
  const companies = [
    {
      name: 'Fintoc',
      industry: 'Fintech',
      year: '2023',
      image: fintocLogo,
      website: 'https://fintoc.com?utm_source=mingaventures',
    },
    {
      name: 'Neat',
      industry: 'Fintech',
      year: '2023',
      image: neatLogo,
      website: 'https://neatpagos.com?utm_source=mingaventures',
    },
    {
      name: 'Xpendit',
      industry: 'Fintech',
      year: '2023',
      image: xpenditLogo,
      website: 'https://www.xpendit.com?utm_source=mingaventures',
    },
    {
      name: 'Getxerpa',
      industry: 'Fintech',
      year: '2024',
      image: getxerpaLogo,
      website: 'https://www.getxerpa.com?utm_source=mingaventures',
    }
  ]

  return (
    <section className='portfolio' id="portfolio">
      <div className="container">
        <h2>Nuestro portafolio</h2>
        <div className="company-list">
          {
            companies.map((company) => (
              <a className="company-card" href={company.website} target='_blank' rel="noreferrer" key={company.name}>
                <img src={company.image} alt={company.name}/>
                <h3>{company.name}</h3>
                <p>{company.industry} / {company.year}</p>
              </a>
            ))
          }
        </div>
        {/* <a href='#a' className='portfolio__link'>Conoce a todos &gt;</a> */}
      </div>
    </section>
  )
}
