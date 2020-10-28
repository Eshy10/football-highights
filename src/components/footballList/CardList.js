import React from 'react';
import Grid from '@material-ui/core/Grid';
import FootballCard from '../footballCard/Card';
import {useStyles} from './CardList.styles';

const FootballCardList = ({props}) => {

    const classes = useStyles(props) 
    return (
     <div>
     <h2 className={classes.title} >All Match Highlights</h2>
     <Grid container className={classes.root} spacing={3}>
     <Grid  item={true} xs={12} sm={6} md={3} className={classes.control} >
     <FootballCard  name = {'Arsenal - Leicester City'} imageUrl  = {'https:\\/\\/www.scorebat.com\\/og\\/m\\/og960536.jpeg'} />
   </Grid> 
   <Grid  item={true} xs={12} sm={6} md={3} className={classes.control} >
   <FootballCard  name = {'Juventus - Verona'} imageUrl  = {'https:\\/\\/www.scorebat.com\\/og\\/m\\/og970718.jpeg'} />
 </Grid>
 <Grid  item={true} xs={12} sm={6} md={3} className={classes.control} >
 <FootballCard  name = {'Levante - Celta Vigo'} imageUrl  = {'https:\\/\\/www.scorebat.com\\/og\\/m\\/og972395.jpeg'} />
</Grid>
<Grid  item={true} xs={12} sm={6} md={3} className={classes.control} >
<FootballCard  name = {'Bayer Leverkusen - Augsburg'} imageUrl  = {'https:\\/\\/www.scorebat.com\\/og\\/m\\/og950262.jpeg'} />
</Grid>
     </Grid>
     </div>
    
    )}

export default FootballCardList;