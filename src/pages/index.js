import React from "react"

import Layout from "../components/layout"
import ProduceGrid from "../components/produce/produceGrid" 

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>The best available produce</h2>
    <h4>January</h4>
    <ProduceGrid />
  </Layout>
)

export default IndexPage
