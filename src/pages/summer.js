import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBarContainer from "../components/infoBarContainer";
import SummerGrid from "../components/summerGrid";

const Summer = () => (
  <Layout>
    <SEO title="Summer Produce" />
    <InfoBarContainer season="Summer" />
    <SummerGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Summer
