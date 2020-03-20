import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import InfoBar from '../components/infoBar/infoBar';
import WinterGrid from '../components/winterGrid';

const Winter = () => (
  <Layout>
    <SEO title="Winter Produce" />
    <InfoBar season="Winter" />
    <WinterGrid />
  </Layout>
);

export default Winter;
