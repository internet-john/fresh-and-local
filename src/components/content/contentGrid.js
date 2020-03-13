import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ContentCard from './contentCard';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: '10px',
  },
});

export default function ContentGrid(props) {
  const classes = useStyles();
  let gridData = props.data;

  if (!props.showFruit && props.showVeg) {
    gridData = gridData.filter(
      produce =>
        produce.node && produce.node.type && produce.node.type === 'VEGETABLE'
    );
  } else if (props.showFruit && !props.showVeg) {
    gridData = gridData.filter(
      produce =>
        produce.node && produce.node.type && produce.node.type === 'FRUIT'
    );
  } else if (!props.showFruit && !props.showVeg) {
    gridData = [];
  }

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid>
        <Grid container spacing={1}>
          {gridData &&
            gridData.map((data, idx) => (
              <Grid
                key={idx}
                item
                xs={props.context === 'HOME_PG' ? 12 : 'fitContent'}
              >
                <ContentCard context={props.context} data={data} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
