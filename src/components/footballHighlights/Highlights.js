import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import useStyles from './Highlights.styles';
import FootballHighlights from '../../api/football';


const VideoHighlight = ({props}) => {
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
      {
          allFootballHighlight.filter(video => video.title === footballHiglightName)
          .map(highlight => (
       <div className={classes.root}>
       <h1 className={classes.title}>{highlight.competition.name.split(" ").slice(1).join(" ")}</h1>
        <ReactMarkdown allowDangerousHtml='true' source={highlight.videos ? highlight.videos[0].embed : ''} />
              </div>
          ))
      }
      </div>
    );
}

export default VideoHighlight;