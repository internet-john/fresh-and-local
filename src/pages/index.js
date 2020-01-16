import React from "react"

import Layout from "../components/layout"

/**
 * 
 * TODO: 
 *   - STANDARDIZE GRIDS AND CARDS INTO A GENERALIZED COMPONENT, FOR SEASONS, MONTHS, PRODUCE
 * 
 */
// import ProduceGrid from "../components/produce/produceGrid" 
import MonthGrid from "../month/monthGrid"


import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MonthGrid />
  </Layout>
)

export default IndexPage
