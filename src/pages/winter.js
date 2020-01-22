import React from "react";
import ReactDOM from "react-dom";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBar from "../components/infoBar";
import WinterGrid from "../components/winterGrid";

const handleDelete = e => {
  ReactDOM.unmountComponentAtNode(e.currentTarget.parentNode);
};

const Winter = () => (
  <Layout>
    <SEO title="Winter Produce" />
    <h1>brr!</h1>
    <InfoBar season="Winter" onDelete={handleDelete} />
    <WinterGrid />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Winter
