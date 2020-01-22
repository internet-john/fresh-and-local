import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBar from "../components/infoBar";
import FallGrid from "../components/fallGrid";

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const Fall = () => (
  <Layout>
    <SEO title="Fall produce" />
    <h1>hot chocolate and colorful leaves</h1>
    <InfoBar season="Fall" onDelete={handleDelete} />
    <FallGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Fall
