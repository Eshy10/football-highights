import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/nav/Nav';
import CarouselHeader from '../components/header/Header';
import FootballCardList from '../components/footballList/CardList'
import FootballHighlights from '../api/Football';
import { filterFootballHighlight } from '../redux/actions/index'

const HomePage = () => {
  const dispatch = useDispatch();
  const allFootballHighlight = useSelector(state => state.football);
  const filterFootballHighlights = useSelector(state => state.filter);

  useEffect(() => {
    const allFootball = () => {
        dispatch(FootballHighlights.getAllFootball());
    };
    allFootball();
  }, [dispatch]);

  let filteredHighlights = [];
  let categories = [];
  const FootballCategories = ['Premier League', 'Serie A', 'Bundesliga', 'Ligue 1', 'La Liga', 'Championship']
  let newCategory = []
  if (!allFootballHighlight) {
    return null;
  }

//   console.log(allFootballHighlight)
  filteredHighlights = allFootballHighlight.filter(data => data.title.toLowerCase()
    .includes(filterFootballHighlights.toLowerCase()));

    categories = allFootballHighlight.filter(data => data.title.toLowerCase()).map(highlighthighlight => highlighthighlight.competition.name.split(" ").slice(1).join(" "))
    categories = categories.filter((x, i, a) => a.indexOf(x) === i)
    categories.forEach(element => {
if (FootballCategories.includes(element)) newCategory.push(element) 
    });

  return (
    <div>
      <Navbar category= {newCategory} handleChange={e => dispatch(filterFootballHighlight(e.target.value))} />
      <CarouselHeader/>
      <FootballCardList data={filteredHighlights} />
    </div>
  );
};

export default HomePage;