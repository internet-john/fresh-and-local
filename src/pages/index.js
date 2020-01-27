import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import ContentGridContainer from "../components/content/contentGridContainer";

const seasonData = [
  {
    header: 'Winter',
    subheader: '',
    content: 'December 21 - March 19 2020'
  },
  {
    header: 'Spring',
    subheader: '',
    content: 'March 19 - June 20 2020'
  },
  {
    header: 'Summer',
    subheader: '',
    content: 'June 20 - September 22 2020'
  },
  {
    header: 'Fall',
    subheader: '',
    content: 'September 22 - December 21 2020'
  }
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentGridContainer orientation={'landscape'} data={seasonData} />
  </Layout>
);

export default IndexPage;
