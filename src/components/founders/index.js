import React from 'react'

import './_styles.scss'
import ScrollingBanner from '../scrolling banner'
import Blob from '../blob'
import cristobalGrifferoImg from './cristobalgriffero.jpg'
import javierBenavidesImg from './javierbenavides.jpg'
import nicolasChaconImg from './nicolaschacon.jpg'
import lukasZorichImg from './lukaszorich.jpg'
import franciscoBarredaImg from './franciscobarreda.jpg'
import oscarQuevedoImg from './oscarquevedo.jpg'
import matiasMenichImg from './matiasmenich.jpg'
import rodrigoLafuenteImg from './rodrigolafuente.jpg'
import mijaelFeldmanImg from './mijaelfeldman.jpg'
import anibalMadridImg from './anibalmadrid.jpg'
import felipeOvalleImg from './felipeovalle.jpg'

export default function Founders() {

  const foundersList = [
    {
      name: 'Javier Benavides',
      image: javierBenavidesImg,
      company: 'Neat',
      linkedinProfile: 'https://www.linkedin.com/in/jabenavi/',
    },
    {
      name: 'Nicolás Chacón',
      image: nicolasChaconImg,
      company: 'Neat',
      linkedinProfile: 'https://www.linkedin.com/in/nicol%C3%A1s-chac%C3%B3n/',
    },
    {
      name: 'Cristobal Griffero',
      image: cristobalGrifferoImg,
      company: 'Fintoc',
      linkedinProfile: 'https://www.linkedin.com/in/chipa-mogli/',
    },
    {
      name: 'Lukas Zorich',
      image: lukasZorichImg,
      company: 'Fintoc',
      linkedinProfile: 'https://www.linkedin.com/in/lezorich/',
    },
  ]

  const partnersList = [
    {
      name: 'Francisco Barreda',
      image: franciscoBarredaImg,
      generalPartner: true,
      tag: 'Legal Tech',
      company: 'Barreda Legal Tech',
      linkedinProfile: 'https://www.linkedin.com/in/francisco-barreda-22477157/',
    },
    {
      name: 'Mijael Feldman',
      image: mijaelFeldmanImg,
      generalPartner: false,
      tag: 'Finance',
      company: 'getxerpa',
      linkedinProfile: 'https://www.linkedin.com/in/mijaelfeldman/',
    },
    {
      name: 'Rodrigo Lafuente',
      image: rodrigoLafuenteImg,
      generalPartner: true,
      tag: 'VC / Tech',
      company: 'ISC / Methodo',
      linkedinProfile: 'https://www.linkedin.com/in/rodrigolafuentes/',
    },
    {
      name: 'Anibal Madrid',
      image: anibalMadridImg,
      generalPartner: false,
      tag: 'Hardtech',
      company: 'SoyMomo',
      linkedinProfile: 'https://www.linkedin.com/in/anibalmadrid/',
    },
    {
      name: 'Matías Menich',
      image: matiasMenichImg,
      generalPartner: true,
      tag: 'Fintech',
      company: 'QVO / Kushki',
      linkedinProfile: 'https://www.linkedin.com/in/matimenich/',
    },
    {
      name: 'Felipe Ovalle',
      image: felipeOvalleImg,
      generalPartner: false,
      tag: 'Logistics',
      company: 'Spread',
      linkedinProfile: 'https://www.linkedin.com/in/felipeovalleo/',
    },
    {
      name: 'Óscar Quevedo',
      image: oscarQuevedoImg,
      generalPartner: true,
      tag: 'Marketing / Cultura',
      company: 'QVO / Kushki',
      linkedinProfile: 'https://www.linkedin.com/in/oquevedo/',
    },
  ]
  return (
    <section className="founders">
      <Blob className="blob1"/>
      <Blob className="blob2"/>

      <div className="container" id="founders">
        <div className='founders__description'>
          <h2>Nuestros fundadores</h2>
          <p>Nos enorgullecemos de respaldar a los que son los catalizadores de la innovación y los arquitectos de empresas disruptivas. Su visión única, experiencia y determinación son fundamentales para construir el éxito. </p>
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
      <div className='pattern-bg pattern-bg-2'/>
      <ScrollingBanner reverse={true} />

      <div className='container' id="partners">

        <div className='partners__list'>
          {
            partnersList.map((partner) =>
            <a className="founder-card partner-card" key={partner.name} href={partner.linkedinProfile} target='_blank' rel="noreferrer">
              <img src={partner.image} alt=""/>
              <p>{partner.name}</p>
              <small>{partner.company}</small>
              <p className='partner-tag'>{partner.tag}</p>
              <div className={`partner-category-tag ${partner.generalPartner ? 'partner-category-tag--gp' : ''}`}>{partner.generalPartner ? 'General partner' : 'Venture partner'}</div>
            </a>
            )
          }
        </div>

        <div className='partners__description'>
          <h2>Nuestros <b>partners</b></h2>
          <p>Los fundadores necesitan más que capital para construir una gran empresa. Se necesita gente que entienda el viaje emprendedor y que sepa lo que se necesita, en especial al principio. Es por eso que <b>todos nuestros partners fueron o son activamente emprendedores</b>.</p>
        </div>
      </div>
    </section>
  )
}
