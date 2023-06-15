import * as React from "react"
import { Link } from "gatsby"
import NotFound from "../components/NotFound"

const pageStyles = {
  color: "#fbf5ef",
  textAlign: 'center',
  padding: '0 2rem',
  position: 'relative',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
}
const headingStyles = {
  marginTop: '4rem',
  marginBottom: 24,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>

      <br/>
      <br/>
      <div>
      <h1 style={headingStyles}>No encontramos lo que buscabas</h1>
      <p style={paragraphStyles}>
        Lo sentimos 😔, puede que la página que buscas esté <i>flotando por ahí...</i>
        <br />
        <br />
        <br />


        <Link to="/">Llévame al inicio por favor &gt;</Link>
      </p>
      </div>
      <NotFound/>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
