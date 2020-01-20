import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SummerGrid from "../components/SummerGrid";

const Summer = () => (
  <Layout>
    <SEO title="Summer Produce" />
    <h1>Summer</h1>
    <p>hot!</p>
    <SummerGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Summer
