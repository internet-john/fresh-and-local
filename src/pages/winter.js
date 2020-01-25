import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBar from "../components/infoBar";
import WinterGrid from "../components/winterGrid";

const Winter = () => (
  <Layout>
    <SEO title="Winter Produce" />
    <InfoBar season="Winter" />
    <WinterGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Winter
