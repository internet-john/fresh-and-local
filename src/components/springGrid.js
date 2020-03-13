import React from 'react';
import { useDispatch } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';

import ContentGrid from './content/contentGrid';
import { showSeasonPg } from '../redux/actions';

const SpringGrid = () => {
  const dispatch = useDispatch();
  dispatch(showSeasonPg());

  const data = useStaticQuery(graphql`
    query SpringProduceQuery {
      allVegetable(filter: { freshMonths: { in: [3, 4, 5] } }) {
        edges {
          node {
            id
            name
            type
            storageMonths
            freshMonths
            location
            generalInfo
            nutritionInfo
          }
        }
      }
      allFruit(filter: { freshMonths: { in: [3, 4, 5] } }) {
        edges {
          node {
            id
            name
            type
            storageMonths
            freshMonths
            location
            generalInfo
            nutritionInfo
          }
        }
      }
    }
  `);

  return (
    <>
      <ContentGrid
        context={'SEASON_PG'}
        data={[...data.allVegetable.edges, ...data.allFruit.edges]}
      />
    </>
  );
};

export default SpringGrid;
