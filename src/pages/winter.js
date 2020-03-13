import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import InfoBarContainer from '../components/infoBar/infoBarContainer';
import WinterGrid from '../components/winterGrid';

const Winter = () => (
  <Layout>
    <SEO title="Winter Produce" />
    <InfoBarContainer season="Winter" />
    <WinterGrid />
  </Layout>
);

export default Winter;
