import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import FallGrid from "../components/FallGrid";


const Fall = () => (
  <Layout>
    <SEO title="Fall produce" />
    <h1>Fall</h1>
    <p>hot chocolate and colorful leaves</p>
    <FallGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Fall
