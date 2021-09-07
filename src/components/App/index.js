// == Import
// import { Route, Switch } from 'react-router-dom';
import './styles.css';

// == Import Composant
import Navbar from '../Nav';
import About from '../About';
import Experiences from '../Experiences';
import Formation from '../Formation';
import Skills from '../Skills';
import Projets from '../Projets';

// == Composant
const App = () => (
  <div className="app">

    <Navbar />
    <About />
    <Experiences />
    <Formation />
    <Skills />
    <Projets />

  </div>

);

// == Export
export default App;
