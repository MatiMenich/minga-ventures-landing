/* eslint-disable react/jsx-pascal-case */

import * as React from "react"
import Hero from "../components/hero"
import Mission from "../components/mission"
import Footer from "../components/footer"
import Founders from "../components/founders"
import Portfolio from "../components/portfolio"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import FAQ from "../components/FAQ"

const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
      <Mission/>
      <Founders/>
      <Portfolio/>
      <FAQ/>
      <Footer/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO/>
