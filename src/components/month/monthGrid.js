import React from "react"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import MonthCard from './monthCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function MonthGrid() {
  const classes = useStyles();
  const months = ["January", "February", "March",  "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const handleOnClick = e => {
      console.log(e);
  }
  // set up handle click on specific card to reveal whats in season that month
  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="" spacing={1}>
        {months.map((month, idx) => 
            <Grid key={idx} item>
              <MonthCard month={month}/>
            </Grid>
        )}    
        </Grid>
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
}
