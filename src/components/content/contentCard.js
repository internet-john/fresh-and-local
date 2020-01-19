import React from 'react';
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  link: {
    textDecoration: 'inherit',
    color: 'inherit'
  }
});

export default function ContentCard(props) {
  const classes = useStyles();

  return (
    props.orientation === 'landscape' ? 
      <Card>
        <Link className={classes.link} to={`/${props.data.toLowerCase()}/`}>
        <CardActionArea>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              {props.data}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
      </Card> : 
      <Card>
        <CardActionArea>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              {props.data.node.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h3">
              {props.data.node.type}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.data.node.month}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
  );
}