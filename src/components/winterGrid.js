import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ContentGrid from "./content/ContentGrid";

const WinterGrid = () => { 
  const data = useStaticQuery(graphql`
    query WinterProduceQuery {
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

export default WinterGrid;
