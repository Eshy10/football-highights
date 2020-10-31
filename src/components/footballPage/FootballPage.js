import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import FootballHighlights from '../../api/Football';
import FootballCardList from '../../components/footballList/CardList';

const FootballPage = () => {
    const { footballPageName } = useParams();
  
    const dispatch = useDispatch();
    const allFootballHighlight = useSelector(state => state.football);
    
  
    useEffect(() => {
      const allFootball = () => {
          dispatch(FootballHighlights.getAllFootball());
      };
      allFootball();
    }, [dispatch]);
  
    if (!allFootballHighlight) {
      return null;
    }
    console.log(allFootballHighlight)
    let sport = []
    sport.push(allFootballHighlight.filter(football => football.competition.name.split(" ").slice(1).join(" ") === footballPageName))
    console.log(sport)
    return (
        <div>
        <Container>
        <Link to='/'>
         <p style={{color: '#2CAAD9'}}>⇦ Back Home</p>
         </Link>
        {
        sport.map(football => (
            <FootballCardList data={football} />
        ))
        }
        </Container>
            
        </div>
    )
}

export default FootballPage
