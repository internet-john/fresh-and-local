import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import ContentGrid from "../components/content/ContentGrid";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentGrid type="month"/>
  </Layout>
)

export default IndexPage;
