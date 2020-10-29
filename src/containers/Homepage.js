import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/nav/Nav';
import FootballCardList from '../components/footballList/CardList'
import FootballHighlights from '../api/Football';
import { filterFootballHighlight } from '../redux/actions/index'

const HomePage = () => {
  const dispatch = useDispatch();
  const allFootballHighlight = useSelector(state => state.football);
  const filterFootballHighlights = useSelector(state => state.filter);

  useEffect(() => {
    const allFootball = () => {
        dispatch(FootballHighlights.getAllFootball);
    };
    allFootball();
  }, [dispatch]);

  let filteredHighlights = [];
  if (!allFootballHighlight) {
    return null;
  }
  filteredHighlights = allFootballHighlight.filter(data => data.name.toLowerCase()
    .includes(filterFootballHighlights.toLowerCase()));

  return (
    <div>
      <Navbar handleChange={e => dispatch(filterFootballHighlight(e.target.value))} />
      <FootballCardList data={filteredHighlights} />
    </div>
  );
};

export default HomePage;