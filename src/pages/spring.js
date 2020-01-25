import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBar from "../components/infoBar";
import SpringGrid from "../components/springGrid";

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const Spring = () => (
  <Layout>
    <SEO title="Spring produce" />
    <InfoBar season="Spring" onDelete={handleDelete} />
    <SpringGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Spring;
