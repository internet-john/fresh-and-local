import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBarContainer from "../components/infoBarContainer";
import FallGrid from "../components/fallGrid";

const Fall = () => (
  <Layout>
    <SEO title="Fall produce" />
    <InfoBarContainer season="Fall" />
    <FallGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Fall
