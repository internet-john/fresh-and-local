import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    height: props => props.cardHeight,
    width: props => props.cardWidth
  },
  media: {
    height: props => props.mediaHeight
  }
});

export default function ContentCard(props) {
  const styleProps = {
    cardHeight: props.type === 'season' ? '80vh' : '40vh',
    cardWidth: props.type === 'season' ? '20vw' : '12.5vw',
    mediaHeight: props.type === 'season' ? '62.5vh' : '20vh',
  }
  const classes = useStyles(styleProps);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}