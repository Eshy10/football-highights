import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {useStyles} from './Card.styles';

const FootballCard = ({props, imageUrl, name, date}) => {
    const formatDate = datetime => new Date(datetime).toDateString();
    const classes = useStyles(props)
    return (
        <Link to={`footballHiglight/${name}`}>
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image= {imageUrl}
          />

          <CardContent>
            <Typography  style={{ color: 'grey', fontWeight: 'bold' }} gutterBottom variant="caption" component="p">
               {name} 
            </Typography>
            <Typography  style={{ color: 'grey', fontWeight: 'bold' }} gutterBottom variant="caption" component="p">
            {formatDate(date)} 
         </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
      </CardActions>
      </Card>
      </Link>
    )
}

FootballCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  props: PropTypes.func,
};

FootballCard.defaultProps = {
  props: () => {},
};


export default FootballCard;