import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import WinterGrid from "../components/winterGrid";

const Winter = () => (
  <Layout>
    <SEO title="Winter Produce" />
    <h1>Winter</h1>
    <p>brr!</p>
    <WinterGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Winter
