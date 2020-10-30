import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Homepage from './containers/Homepage';
import VideoHighlight from './components/footballHighlights/Highlights';
import './App.css';
import FootballPage from './components/footballPage/FootballPage';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/">
    <Container>
   <Homepage/>
    </Container>
    </Route>
    <Route
    path="/footballHiglight/:footballHiglightName"
    exact
    component={VideoHighlight}
  />
  <Route
  path="/footballPage/:footballPageName"
  exact
  component={FootballPage}
/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
