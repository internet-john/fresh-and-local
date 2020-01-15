import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// just a simple POC, will remove later
import ProduceGrid from "../components/produce/produceGrid" 

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>The best available produce.</h2>
    <h4>January</h4>
    <ProduceGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
