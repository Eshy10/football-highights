import React from 'react';
import Grid from '@material-ui/core/Grid';
import FootballCard from '../footballCard/Card';
import { v4 as uuid_v4  } from 'uuid';
import Soccer from '../../asset/soccer.jpg'
import Spinner from '../../asset/spinner.gif'
import {useStyles} from './CardList.styles';

const FootballCardList = ({...props}) => {
  
    const classes = useStyles(props) 
    return props.data.length ? (
     <div>
     <h2 className={classes.title} >All Match Highlights</h2>
     <Grid container className={classes.root} spacing={3}>
     {
         props.data.map(football => (
            <Grid key={uuid_v4()}  item={true} xs={12} sm={6} md={3} className={classes.control} >
            <FootballCard  
            key= {football.competition ? football.competition.id : ''}
            name = {football.title} 
            imageUrl  = {football.thumbnail ? football.thumbnail : {Soccer}} 
            date = {football.date}
            />
          </Grid> 
         ))
     }
     </Grid>
     </div>
    
    ) : (
        <div>
   <img src={Spinner} alt='spinner'/>
      </div>
    )
}

export default FootballCardList;