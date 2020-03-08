import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import InfoBarContainer from '../components/infoBar/infoBarContainer';
import FallGrid from '../components/fallGrid';

const Fall = () => (
  <Layout>
    <SEO title="Fall produce" />
    <InfoBarContainer season="Fall" />
    <FallGrid />
  </Layout>
);

export default Fall;
