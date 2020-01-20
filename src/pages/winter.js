import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ChipBar from "../components/chipBar";
import WinterGrid from "../components/winterGrid";

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

//TODO: CREATE CHIPBAR COMPONENT

const Winter = () => (
  <Layout>
    <SEO title="Winter Produce" />
    <h1>brr!</h1>
    <ChipBar season="Winter" onDelete={handleDelete} />
    <WinterGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Winter
