import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import ContentGrid from "../components/content/contentGrid";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentGrid orientation={'landscape'} data={['Winter', 'Spring', 'Summer', 'Fall']} />
  </Layout>
)

export default IndexPage;
