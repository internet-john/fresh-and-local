import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ContentGridContainer from "./content/ContentGridContainer";

const WinterGrid = () => { 
  const data = useStaticQuery(graphql`
    query WinterProduceQuery {
      allVegetable(filter: {
        freshMonths: {in: [12,1,2]} 
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
        freshMonths: {in: [12,1,2]} 
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

export default WinterGrid;
