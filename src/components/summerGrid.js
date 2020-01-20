import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ContentGrid from "./content/ContentGrid";

const SummerGrid = () => { 
  const data = useStaticQuery(graphql`
    query SummerProduceQuery {
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

export default SummerGrid;
