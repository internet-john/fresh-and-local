import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBar from "../components/infoBar";
import SummerGrid from "../components/summerGrid";

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const Summer = () => (
  <Layout>
    <SEO title="Summer Produce" />
    <InfoBar season="Summer" onDelete={handleDelete} />
    <SummerGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Summer
