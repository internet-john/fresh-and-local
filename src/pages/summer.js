import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ChipBar from "../components/chipBar";
import SummerGrid from "../components/summerGrid";

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const Summer = () => (
  <Layout>
    <SEO title="Summer Produce" />
    <h1>hot!</h1>
    <ChipBar season="Summer" onDelete={handleDelete} />
    <SummerGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Summer
