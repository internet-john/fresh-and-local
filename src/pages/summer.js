import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import InfoBarContainer from '../components/infoBar/infoBarContainer';
import SummerGrid from '../components/summerGrid';

const Summer = () => (
  <Layout>
    <SEO title="Summer Produce" />
    <InfoBarContainer season="Summer" />
    <SummerGrid />
  </Layout>
);

export default Summer;
