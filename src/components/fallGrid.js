import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ContentGrid from "./content/ContentGrid";

const FallGrid = () => { 
  const data = useStaticQuery(graphql`
    query FallProduceQuery {
      allVegetable(filter: {
        freshMonths: {in: [9,10,11]} 
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
        freshMonths: {in: [9,10,11]} 
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
      <ContentGrid orientation={"portrait"} data={[...data.allVegetable.edges, ...data.allFruit.edges]}  />
    </>
  );
};

export default FallGrid;
