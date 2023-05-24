import * as React from "react"
import Hero from "../components/hero"
import Mission from "../components/mission"
import Footer from "../components/footer"
import Founders from "../components/founders"
import Portfolio from "../components/portfolio"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
      <Mission/>
      <Founders/>
      <Portfolio/>
      <Footer/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Minga Ventures - Aliados tempranos de fundadores increíbles</title>
