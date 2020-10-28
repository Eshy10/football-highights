import './App.css';
import Container from '@material-ui/core/Container';
import Navbar from './components/nav/Nav';
import CarouselHeader from './components/header/Header';
import FootballCardList from './components/footballList/CardList';

function App() {
  return (
    <div className="App">
    <Container>
    <Navbar/>
    <CarouselHeader/>
    <FootballCardList/>
    </Container>
    </div>
  );
}

export default App;
