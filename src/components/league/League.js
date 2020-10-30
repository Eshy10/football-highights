import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import useStyles from './League.styles';
import FootballHighlights from '../../api/football';


const LeagueVideo = ({props}) => {
    const classes = useStyles(props);
    const { footballHiglightName } = useParams();
  
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
  
    return (
      <div>
      <Link to='/'>
      <p style={{color: '#2CAAD9'}}>⇦ Back Home</p>
      </Link>
      {
          allFootballHighlight.filter(video => video.title === footballHiglightName)
          .map(highlight => (
       <div className={classes.root}>
       <h1 className={classes.title}>{highlight.competition.name.split(" ").slice(1).join(" ")}</h1>
        <ReactMarkdown allowDangerousHtml='true' source={highlight.videos ? highlight.videos[0].embed : ''} />
        <p className={classes.title}>{highlight.title}</p>
              </div>
          ))
      }
      </div>
    );
}

export default LeagueVideo;