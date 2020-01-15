import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 300
  },
  // title: {
  //   fontSize: 14,
  // },
  // pos: {
  //   marginBottom: 12,
  // },
});

export default function ProduceCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.type}
        </Typography>
        <Typography variant="body2" component="p">
          {props.name} is a {props.type} available in {props.month}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}