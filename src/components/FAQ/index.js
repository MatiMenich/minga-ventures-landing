import React, { useRef, useState } from 'react'

import './_styles.scss'
import Blob from '../blob'

function Collapsible({children, title, isOpen}) {
  const [open, setOpen] = useState(isOpen)
  const contentRef = useRef()

  return (

      <div className={`collapsible ${open ? 'collapsible--open': ''}`} onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <div className={`collapsible__content`} ref={contentRef}
              style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }} >
            <div className={`collapsible__content-inner`}>
              {children}
            </div>
        </div>
      </div>
  )
}

export default function FAQ() {
  const faqList = [
    {
      question: '¿De qué tamaño es el ticket/inversión?',
      answer: '20k-50k USD.'
    },
    {
      question: '¿En qué etapas se enfocan?',
      answer: 'Etapa temprana o early-stage (pre-seed y seed).'
    },
    {
      question: '¿En qué industrias invierten?',
      answer: 'Somos agnósticos, no tenemos una industria de preferencia pero si creemos que podemos aportar más en las industrias donde tiene experiencia la Minga. Más que una industria, nos enfocamos en el fit entre problema/solución y el equipo fundador.'
    },
    {
      question: '¿Quién decide en qué empresas invierten?',
      answer: 'La decisión pasa por los 4 general partners, complementada por la opinión de los limited/venture partners.'
    },
    {
      question: '¿Cuándo recibiría una respuesta a mi postulación?',
      answer: 'En menos de 1 mes.'
    },
    {
      question: '¿Quiénes pueden convertirse en Limited Partners?',
      answer: 'Uno de nuestros requisitos más importantes es ser o haber sido un fundador de alguna empresa.'
    },
    {
      question: '¿Qué tan activos son los partners con las compañías del portafolio?',
      answer: 'Podemos ser tan activos como la compañía quiera que seamos. Nos encanta involucrarnos y dar soporte cuando se necesite.'
    },
    {
      question: 'Si mi empresa es seleccionada, ¿Es cierto que tengo que hacer un evento/asado para la comunidad?',
      answer: 'Sí, es parte de nuestros requerimientos.'
    },
  ]

  return (
    <section id="faq" className='faq-section'>
      <div className="container">
        <h2>Preguntas frecuentes (FAQ)</h2>

        {faqList.map(({question, answer}) => (
          <Collapsible key={question} title={question} isOpen={false}>
            { answer }
          </Collapsible>
        ))}
      </div>
      <Blob/>
    </section>
  )
}
