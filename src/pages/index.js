import * as React from "react"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Mission from "../components/mission"
import Footer from "../components/footer"
import Founders from "../components/founders"
import Portfolio from "../components/portfolio"

const IndexPage = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Mission/>
      <Founders/>
      <Portfolio/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
