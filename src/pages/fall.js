import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import InfoBar from '../components/infoBar/infoBar';
import FallGrid from '../components/fallGrid';

const Fall = () => (
  <Layout>
    <SEO title="Fall produce" />
    <InfoBar season="Fall" />
    <FallGrid />
  </Layout>
);

export default Fall;
