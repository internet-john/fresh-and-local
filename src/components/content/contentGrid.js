import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ContentCard from './contentCard';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: '10px',
  },
});

const ContentGrid = props => {
  const classes = useStyles();
  let gridData = props.data;
  const showFruit = useSelector(state => state.showFruit);
  const showVeg = useSelector(state => state.showVeg);

  if (!showFruit && showVeg) {
    gridData = gridData.filter(
      produce =>
        produce.node && produce.node.type && produce.node.type === 'VEGETABLE'
    );
  } else if (showFruit && !showVeg) {
    gridData = gridData.filter(
      produce =>
        produce.node && produce.node.type && produce.node.type === 'FRUIT'
    );
  }

  return (
    <Grid
      container
      className={classes.root}
      spacing={1}
      data-automation-id="freshlocal__contentgrid"
    >
      <Grid>
        <Grid container spacing={1}>
          {gridData &&
            gridData.map((data, idx) => (
              <Grid
                key={idx}
                item
                xs={props.context === 'HOME_PG' ? 12 : 'auto'}
              >
                <ContentCard context={props.context} data={data} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContentGrid;
