import React from "react"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ContentCard from './contentCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function ContentGrid(props) {
  const classes = useStyles();
  const seasons = ["Winter", "Spring", "Summer", "Fall"];
  const months = ["January", "February", "March",  "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const uiData = props.type === 'season' ? seasons : months;
  // const handleOnClick = () => {};

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="" spacing={1}>
        {uiData.map((data, idx) => 
            <Grid key={idx} item>
              <ContentCard type={props.type} data={data} />
            </Grid>
        )}    
        </Grid>
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
}
