import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import InfoBar from '../components/infoBar/infoBar';
import SummerGrid from '../components/summerGrid';

const Summer = () => (
  <Layout>
    <SEO title="Summer Produce" />
    <InfoBar season="Summer" />
    <SummerGrid />
  </Layout>
);

export default Summer;
