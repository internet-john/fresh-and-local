import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SpringGrid from "../components/SpringGrid";

const Spring = () => (
  <Layout>
    <SEO title="Spring produce" />
    <h1>Spring</h1>
    <p>sunshine and flowers</p>
    <SpringGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Spring;
