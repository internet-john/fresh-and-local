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

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid>
        <Grid container justify="" spacing={1}>
        {props.data.map((data, idx) => 
            <Grid key={idx} item xs={12}>
              <ContentCard orientation={props.orientation} data={data} />
            </Grid>
        )}    
        </Grid>
      </Grid>
    </Grid>
  );
}
