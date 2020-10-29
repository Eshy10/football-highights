import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {useStyles} from './Card.styles';

const FootballCard = ({props, imageUrl, name}) => {

    const classes = useStyles(props)
    return (
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
          </CardContent>
        </CardActionArea>
        <CardActions>
      </CardActions>
      </Card>
    )
}

export default FootballCard;