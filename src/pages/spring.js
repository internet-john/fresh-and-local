import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBarContainer from "../components/infoBar/infoBarContainer";
import SpringGrid from "../components/springGrid";

const Spring = () => (
  <Layout>
    <SEO title="Spring Produce" />
    <InfoBarContainer season="Spring" />
    <SpringGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Spring;
