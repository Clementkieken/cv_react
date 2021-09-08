// == Import
import { useRef } from 'react';

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
const App = () => {
  const refAbout = useRef();
  const refExperiences = useRef();
  const refFormation = useRef();
  const refSkills = useRef();
  const refProjets = useRef();

  return (
    <div className="app">

      <Navbar
        refAbout={refAbout}
        refExperiences={refExperiences}
        refFormation={refFormation}
        refSkills={refSkills}
        refProjets={refProjets}
      />
      <About refAbout={refAbout} />
      <Experiences refExperiences={refExperiences} />
      <Formation refFormation={refFormation} />
      <Skills refSkills={refSkills} />
      <Projets refProjets={refProjets} />

    </div>
  );
};

// == Export
export default App;
