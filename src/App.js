import './App.css';
import Container from '@material-ui/core/Container';
import Navbar from './components/nav/Nav';
import CarouselHeader from './components/header/Header'

function App() {
  return (
    <div className="App">
    <Container>
    <Navbar/>
    <CarouselHeader/>
    </Container>
    </div>
  );
}

export default App;
