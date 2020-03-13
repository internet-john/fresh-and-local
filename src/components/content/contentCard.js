import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// import ContentCardMedia from './contentCardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  link: {
    textDecoration: 'inherit',
    color: 'inherit',
  },
  winter: {
    backgroundColor: '#C4FAF8',
  },
  spring: {
    backgroundColor: '#FBE4FF',
  },
  summer: {
    backgroundColor: '#F9CC6C',
  },
  fall: {
    backgroundColor: '#EBE6CA',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const ContentCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return props.context === 'HOME_PG' ? (
    <Card className={classes[props.data.header.toLowerCase()]}>
      <Link
        className={classes.link}
        to={`/${props.data.header.toLowerCase()}`}
        location={{ page: props.data.header }}
      >
        <CardActionArea>
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
    </Card>
  ) : (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="produce-card" className={classes.avatar}>
            {props.data.node.type[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.data.node.name}
        subheader={props.data.node.type}
      />
      {/* No images until programmatic solution found */}
      {/* <ContentCardMedia
        context={{
          imgRelPath: `${props.data.node.name.toLowerCase()}.png`,
        }}
      /> */}
      <CardContent>
        <Typography paragraph>{props.data.node.generalInfo}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Nutritional Info:</Typography>
          <Typography paragraph>{props.data.node.nutritionInfo}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ContentCard;
