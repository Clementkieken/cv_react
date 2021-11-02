/* eslint-disable max-len */
// == Import
import { useRef, useEffect, useState } from 'react';
import './styles.css';

// == Import Composant
import Navbar from '../Nav';
import About from '../About';
import Experiences from '../Experiences';
import Formation from '../Formation';
import Skills from '../Skills';
import Projets from '../Projets';
import Contact from '../Contact';
import Footer from '../Footer';

const App = () => {
  // == Composant utilisant un useRef pour scroll directement à l'endroit souhaité via la NavBar :
  const refAbout = useRef();
  const refExperiences = useRef();
  const refFormation = useRef();
  const refSkills = useRef();
  const refProjets = useRef();
  const refContact = useRef();

  const navBanner = useRef();

  const [navColor, setNavColor] = useState('bckgrnd__white');

  // ==  Fonction pour changer la couleur de la NavBar selon le positionnement du scroll :
  const handleScroll = () => {
    // == Logique écrite à traduire en JavaScript :
    // savoir où l'écran (window) est positionné en height par rapport à tout le document
    //* par ex si le document fait 10000px de height, je veux savoir où je suis en train de regarder
    // je compare cette valeur avec la position dans le document de chq section avec les ref
    //* si je suis au 4800px, je vérifie si 4800px est compris entre le positionnement du début de la section ou sa fin
    // je modif la couleur en fonction de ce que je veux (là il y a plusieurs façon de faire)
    // console.log(e);
    // console.log('app : ', refApp.current.getBoundingClientRect())
    // console.log('formation : ', refFormation.current.getBoundingClientRect())

    const { top: refAboutTop, height: refAboutHeight } = refAbout.current.getBoundingClientRect();
    const { top: refExpeTop, height: refExpeHeight } = refExperiences.current.getBoundingClientRect();
    const { top: refFormTop, height: refFormHeight } = refFormation.current.getBoundingClientRect();
    const { top: refSkillsTop, height: refSkillsHeight } = refSkills.current.getBoundingClientRect();
    const { top: refProjetsTop, height: refProjetsHeight } = refProjets.current.getBoundingClientRect();
    const { top: refContactTop, height: refContactHeight } = refContact.current.getBoundingClientRect();

    const { height: navHeight } = navBanner.current.getBoundingClientRect();

    if ((refExpeTop - navHeight) <= 0 && (refExpeTop - navHeight) > (0 - refExpeHeight)) {
      setNavColor('bckgrnd__black');
    }

    if ((refSkillsTop - navHeight) <= 0 && (refSkillsTop - navHeight) > (0 - refSkillsHeight)) {
      setNavColor('bckgrnd__black');
    }

    if ((refContactTop - navHeight) <= 0 && (refContactTop - navHeight) > (0 - refContactHeight)) {
      setNavColor('bckgrnd__black');
    }

    if ((refAboutTop - navHeight) <= 0 && (refAboutTop - navHeight) > (0 - refAboutHeight)) {
      setNavColor('bckgrnd__white');
    }

    if ((refFormTop - navHeight) <= 0 && (refFormTop - navHeight) > (0 - refFormHeight)) {
      setNavColor('bckgrnd__white');
    }

    if ((refProjetsTop - navHeight) <= 0 && (refProjetsTop - navHeight) > (0 - refProjetsHeight)) {
      setNavColor('bckgrnd__white');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll());
  }, []);

  return (
    <div className="app">

      <Navbar
        refAbout={refAbout}
        refExperiences={refExperiences}
        refFormation={refFormation}
        refSkills={refSkills}
        refProjets={refProjets}
        refContact={refContact}
        navColor={navColor}
        navBanner={navBanner}
      />
      <About refAbout={refAbout} />
      <Experiences refExperiences={refExperiences} />
      <Formation refFormation={refFormation} />
      <Skills refSkills={refSkills} />
      <Projets refProjets={refProjets} />
      <Contact refContact={refContact} />
      <Footer />

    </div>
  );
};

// == Export
export default App;
