import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBarContainer from "../components/infoBarContainer";
import WinterGrid from "../components/winterGrid";

const Winter = () => (
  <Layout>
    <SEO title="Winter Produce" />
    <InfoBarContainer season="Winter" />
    <WinterGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Winter
