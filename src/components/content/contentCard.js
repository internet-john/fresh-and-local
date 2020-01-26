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
  },
  winter: {
    backgroundColor: '#C4FAF8'
  },
  spring: {
    backgroundColor: '#FBE4FF'
  },
  summer: {
    backgroundColor: '#F9CC6C'
  },
  fall: {
    backgroundColor: '#EBE6CA'
  }
});

export default function ContentCard(props) {
  const classes = useStyles();

  return (
    props && props.data && props.orientation ? 
      props.orientation === 'landscape' ? 
        <Card className={classes[props.data.header.toLowerCase()]}>
          <Link className={classes.link} to={`/${props.data.header.toLowerCase()}`}>
          <CardActionArea>
            <CardMedia
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                {props.data.header}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {props.data.content}
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
      : null
  );
}