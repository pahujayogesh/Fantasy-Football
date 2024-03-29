import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import "./tailwind.css";
import Main from "./components/Main.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer";
import Nav from './components/Nav';
import { Matches } from './components/Matches/Matches.jsx';
import ScoreCard from './components/Scorecard/Scorecard.jsx';
import Playerinfo from './components/Plyerinfo/Playerinfo';



function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/Fantasy-Football" element={<Hero/>} />
        <Route path="/" element={<Hero/>} />
        <Route path="/Playerinfo" element={<Main/>} />
        <Route path="/Matches" element={<Matches/>} />
        <Route path="/ScoreCard" element={<ScoreCard/>} />
        <Route path="/Player" element={<Playerinfo/>} />
      </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
