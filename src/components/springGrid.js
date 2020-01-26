import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ContentGridContainer from "./content/contentGridContainer";

const SpringGrid = () => { 
  const data = useStaticQuery(graphql`
    query SpringProduceQuery {
      allVegetable(filter: {
        freshMonths: {in: [3,4,5]} 
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
        freshMonths: {in: [3,4,5]} 
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
      <ContentGridContainer orientation={"portrait"} data={[...data.allVegetable.edges, ...data.allFruit.edges]}  />
    </>
  );
};

export default SpringGrid;
