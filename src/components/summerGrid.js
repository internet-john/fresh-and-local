import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ContentGrid from "./content/ContentGrid";

const SummerGrid = () => { 
  const data = useStaticQuery(graphql`
    query SummerProduceQuery {
      allVegetable(filter: {
        freshMonths: {in: [6,7,8]} 
      }) {
        edges {
          node {
            id
            name
            type
            storageMonths
            freshMonths
            location
          }
        }
      }
      allFruit(filter: {
        freshMonths: {in: [6,7,8]} 
      }) {
        edges {
          node {
            id
            name
            type
            storageMonths
            freshMonths
            location
          }
        }
      }
    }
  `);

  return (
    <>
      <ContentGrid data={[...data.allVegetable.edges, ...data.allFruit.edges]}  />
    </>
  );
};

export default SummerGrid;
