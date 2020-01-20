import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ContentGrid from "./content/ContentGrid";

const SpringGrid = () => { 
  const data = useStaticQuery(graphql`
    query SpringProduceQuery {
      allVegetable {
        edges {
          node {
            id
            name
            type
            month
            location
          }
        }
      }
    }
  `);

  return (
    <>
      <ContentGrid orientation={'portrait'} data={[...data.allVegetable.edges]}  />
    </>
  );
};

export default SpringGrid;
