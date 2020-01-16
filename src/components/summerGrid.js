import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ContentGridContainer from "./content/contentGridContainer";

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
      <ContentGridContainer context={"SEASON_PG"} data={[...data.allVegetable.edges, ...data.allFruit.edges]}  />
    </>
  );
};

export default SummerGrid;
