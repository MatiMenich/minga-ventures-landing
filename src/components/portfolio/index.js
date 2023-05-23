import React from 'react'

import './_styles.scss'

import fintocLogo from './fintoc-logo.png'
import examediLogo from './examedi-logo.png'
import tokuLogo from './toku-logo.png'
import pluttoLogo from './plutto-logo.png'

export default function Portfolio() {
  const companies = [
    {
      name: 'Examedi',
      industry: 'Healthtech',
      year: '2021',
      image: examediLogo,
      website: 'https://examedi.cl',
    },
    {
      name: 'Fintoc',
      industry: 'Fintech',
      year: '2023',
      image: fintocLogo,
      website: 'https://fintoc.com',
    },
    {
      name: 'Plutto',
      industry: 'Fintech',
      year: '2022',
      image: pluttoLogo,
      website: 'https://getplutto.com',
    },
    {
      name: 'Toku',
      industry: 'Fintech',
      year: '2021',
      image: tokuLogo,
      website: 'https://trytoku.com',
    },
  ]

  return (
    <section className='portfolio' id="portfolio">
      <div className="container">
        <h2>Nuestro Portafolio</h2>
        <div className="company-list">
          {
            companies.map((company) => (
              <a className="company-card" href={company.website} target='_blank' rel="noreferrer">
                <img src={company.image} alt={company.name}/>
                <h3>{company.name}</h3>
                <p>{company.industry} / {company.year}</p>
              </a>
            ))
          }
        </div>
        <a href='#a' className='portfolio__link'>Conoce a todos &gt;</a>
      </div>
    </section>
  )
}
