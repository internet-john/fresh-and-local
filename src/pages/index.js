import React from "react"
import { createStore } from 'redux';
import { Provider } from "react-redux";

import reducer from "../reducers/appReducer";

import SEO from "../components/seo"
import Layout from "../components/layout"
import ContentGrid from "../components/content/contentGrid";

const store = createStore(reducer);

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
  <Provider store={store}>
    <Layout>
      <SEO title="Home" />
      <ContentGrid orientation={'landscape'} data={seasonData} />
    </Layout>
  </Provider>
)

export default IndexPage;
