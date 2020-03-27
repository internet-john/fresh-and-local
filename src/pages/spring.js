import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import InfoBar from '../components/infoBar/infoBar';
import SpringGrid from '../components/springGrid';

const Spring = () => (
  <Layout>
    <SEO title="Spring Produce" />
    <InfoBar season="Spring" />
    <SpringGrid />
  </Layout>
);

export default Spring;
