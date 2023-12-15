import React, { useState } from 'react'

import './_styles.scss'
import ScrollingBanner from '../scrolling banner'
import Blob from '../blob'
import cristobalGrifferoImg from './img/cristobalgriffero.jpg'
import barbaraCovarrubiasImg from './img/barbaracovarrubias.jpg'
import javierBenavidesImg from './img/javierbenavides.jpg'
import nicolasChaconImg from './img/nicolaschacon.jpg'
import lukasZorichImg from './img/lukaszorich.jpg'
import franciscoBarredaImg from './img/franciscobarreda.jpg'
import oscarQuevedoImg from './img/oscarquevedo.jpg'
import matiasMenichImg from './img/matiasmenich.jpg'
import rodrigoLafuenteImg from './img/rodrigolafuente.jpg'
import mijaelFeldmanImg from './img/mijaelfeldman.jpg'
import anibalMadridImg from './img/anibalmadrid.jpg'
import felipeOvalleImg from './img/felipeovalle.jpg'
import luisQuevedoImg from './img/luisquevedo.jpg'
import ianLeeImg from './img/ianlee.jpg'
import felipePuntarelliImg from './img/felipepuntarelli.jpg'
import nicolasRamosImg from './img/nicolasramos.jpg'
import diegoPhilippiImg from './img/diegophilippi.jpg'
import martinDelCastilloImg from './img/martindelcastillo.jpg'
import fernandoReyesImg from './img/fernandoreyes.jpg'

// import filterImg from './img/filter.svg'

const foundersList = [
  {
    name: 'Javier Benavides',
    image: javierBenavidesImg,
    company: 'Neat',
    linkedinProfile: 'https://www.linkedin.com/in/jabenavi/',
  },
  {
    name: 'Martin Del Castillo',
    image: martinDelCastilloImg,
    company: 'Xpendit',
    linkedinProfile: 'https://www.linkedin.com/in/mart%C3%ADn-del-castillo/',
  },
  {
    name: 'Nicolás Chacón',
    image: nicolasChaconImg,
    company: 'Neat',
    linkedinProfile: 'https://www.linkedin.com/in/nicol%C3%A1s-chac%C3%B3n/',
  },
  {
    name: 'Mijael Feldman',
    image: mijaelFeldmanImg,
    company: 'getxerpa',
    linkedinProfile: 'https://www.linkedin.com/in/mijaelfeldman/',
  },
  {
    name: 'Cristobal Griffero',
    image: cristobalGrifferoImg,
    company: 'Fintoc',
    linkedinProfile: 'https://www.linkedin.com/in/chipa-mogli/',
  },
  {
    name: 'Diego Philippi',
    image: diegoPhilippiImg,
    company: 'Xpendit',
    linkedinProfile: 'https://www.linkedin.com/in/diegophilippi/',
  },
  {
    name: 'Felipe Puntarelli',
    image: felipePuntarelliImg,
    company: 'Xpendit',
    linkedinProfile: 'https://www.linkedin.com/in/felipe-puntarelli-99a73425/',
  },
  {
    name: 'Nicolas Ramos',
    image: nicolasRamosImg,
    company: 'Xpendit',
    linkedinProfile: 'https://www.linkedin.com/in/nicolas-jose-ramos/',
  },
  {
    name: 'Fernando Reyes',
    image: fernandoReyesImg,
    company: 'getxerpa',
    linkedinProfile: 'https://www.linkedin.com/in/ferreyesv/',
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
    partnerType: 'general',
    tag: 'Legal Tech',
    company: 'Barreda Legal Tech',
    linkedinProfile: 'https://www.linkedin.com/in/francisco-barreda-22477157/',
  },
  {
    name: 'Barbara Covarrubias',
    image: barbaraCovarrubiasImg,
    partnerType: 'venture',
    tag: 'Innovation / Media',
    company: 'Inv. Grupo ISC',
    linkedinProfile: 'https://www.linkedin.com/in/barbaracovarrubias/',
  },
  {
    name: 'Rodrigo Lafuente',
    image: rodrigoLafuenteImg,
    partnerType: 'general',
    tag: 'VC / Tech',
    company: 'ISC / Methodo',
    linkedinProfile: 'https://www.linkedin.com/in/rodrigolafuentes/',
  },
  {
    name: 'Ian Lee',
    image: ianLeeImg,
    partnerType: 'limited',
    tag: 'Healthtech',
    company: 'Examedi',
    linkedinProfile: 'https://www.linkedin.com/in/ian-lee13/',
  },
  {
    name: 'Anibal Madrid',
    image: anibalMadridImg,
    partnerType: 'limited',
    tag: 'Hardtech',
    company: 'SoyMomo',
    linkedinProfile: 'https://www.linkedin.com/in/anibalmadrid/',
  },
  {
    name: 'Matías Menich',
    image: matiasMenichImg,
    partnerType: 'general',
    tag: 'Fintech',
    company: 'QVO / Kushki',
    linkedinProfile: 'https://www.linkedin.com/in/matimenich/',
  },
  {
    name: 'Felipe Ovalle',
    image: felipeOvalleImg,
    partnerType: 'limited',
    tag: 'Logistics',
    company: 'Spread',
    linkedinProfile: 'https://www.linkedin.com/in/felipeovalleo/',
  },
  {
    name: 'Dr. Luis Quevedo',
    image: luisQuevedoImg,
    partnerType: 'limited',
    tag: 'Medtech',
    company: 'ICOR',
    linkedinProfile: 'https://www.linkedin.com/in/luis-quevedo-6204979a/',
  },
  {
    name: 'Óscar Quevedo',
    image: oscarQuevedoImg,
    partnerType: 'general',
    tag: 'Marketing / Cultura',
    company: 'QVO / Kushki',
    linkedinProfile: 'https://www.linkedin.com/in/oquevedo/',
  },
]

function PartnerTag({partnerType}) {
  let partnerClass
  let partnerText

  switch (partnerType) {
    case 'general':
      partnerClass = 'partner-tag--gp'
      partnerText = 'General partner'
      break;
    case 'limited':
      partnerClass = 'partner-tag--lp'
      partnerText = 'Limited partner'
      break;
    case 'venture':
      partnerClass = 'partner-tag--vp'
      partnerText = 'Venture partner'
      break;
    default:
      throw new Error(`Unknown partner type: ${partnerType}`)
  }

  return  <div className={`partner-category-tag ${partnerClass}`}>
    { partnerText }
  </div>
}

export default function Founders() {

  return (
    <section className="founders">
      <Blob className="blob1"/>
      <Blob className="blob2"/>

      <div className="container" id="founders">
        <div className='founders__description'>
          <h2>Nuestr@s fundadores</h2>
          <p>Nos <b>enorgullecemos de respaldar</b> a las catalizadoras y catalizadores de la innovación y son arquitectos de empresas disruptivas. Su visión única, experiencia y determinación son fundamentales para construir el éxito. </p>
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

      <Partners/>
    </section>
  )
}

function Partners() {
  const [partners, _setPartners] = useState(partnersList)
  // const [selectedPartner, setSelectedPartner] = useState(undefined)

  // const filterPartnerList = (partnerType) => {
  //   console.log(partnerType)
  //   if (selectedPartner === partnerType) {
  //     setPartners(partnersList)
  //     setSelectedPartner(undefined)
  //   } else {
  //     setPartners(partnersList.filter((partner) => partner.partnerType === partnerType))
  //     setSelectedPartner(partnerType)
  //   }
  // }

  return (
    <div className='container' id="partners">
        <div className='partners__list'>
          {
            partners.map((partner) =>
            <a className="founder-card partner-card" key={partner.name} href={partner.linkedinProfile} target='_blank' rel="noreferrer">
              <img src={partner.image} alt={`${partner.name}`}/>
              <p>{partner.name}</p>
              <small>{partner.company}</small>
              <p className='partner-tag'>{partner.tag}</p>
              <PartnerTag partnerType={partner.partnerType}/>
            </a>
            )
          }
        </div>

        <div className='partners__description'>
          <h2>Nuestr@s <b>partners</b></h2>
          <p>Los fundadores y fundadoras necesitan más que capital para construir una gran empresa. Se necesita gente que entienda el viaje emprendedor y que sepa lo que se necesita, en especial al principio. Es por eso que <b>todos nuestr@s partners fueron o son activamente emprendedores</b>.</p>

          {/* <div className="partners__filter">
            <img src={filterImg} alt="filter" height={20} width={20}/>
            <button onClick={() => filterPartnerList('general')} className='partner-category-tag partner-tag--gp'>General</button>
            <button onClick={() => filterPartnerList('limited')} className='partner-category-tag partner-tag--lp'>Limited</button>
            <button onClick={() => filterPartnerList('venture')} className='partner-category-tag partner-tag--vp'>Venture</button>
          </div> */}
        </div>
      </div>
  )
}
