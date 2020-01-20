import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ChipBar from "../components/chipBar";
import SpringGrid from "../components/SpringGrid";

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const Spring = () => (
  <Layout>
    <SEO title="Spring produce" />
    <h1>sunshine and flowers</h1>
    <ChipBar season="Spring" onDelete={handleDelete} />
    <SpringGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Spring;
