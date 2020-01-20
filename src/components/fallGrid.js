import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ContentGrid from "./content/ContentGrid";

const WinterGrid = () => { 
  const data = useStaticQuery(graphql`
    query FallProduceQuery {
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
      <ContentGrid data={[...data.allVegetable.edges]}  />
    </>
  );
};

export default WinterGrid;
