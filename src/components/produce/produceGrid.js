import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ProduceCard from './produceCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function ProduceGrid() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query allProduce {
      allFruit {
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

  const allFruit = data && data.allFruit && data.allFruit.edges && data.allFruit.edges[0] ? data.allFruit.edges : []
  const allVegetables = data && data.allVegetable && data.allVegetable.edges && data.allVegetable.edges[0] ? data.allVegetable.edges : []

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="" spacing={1}>
          {allFruit.map(node => <Grid key={node.node.id} item><ProduceCard name={node.node.name} type={node.node.type} month={node.node.month} /></Grid>)}
          {allVegetables.map(node => <Grid key={node.node.id} item><ProduceCard name={node.node.name} type={node.node.type} month={node.node.month} /></Grid>)}
        </Grid>
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
}
