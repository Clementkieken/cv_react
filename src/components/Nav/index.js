// import { NavLink } from 'react-router-dom';
// import About from '../About';
import './styles.scss';
import PropTypes from 'prop-types';

const Navbar = ({
  refAbout, refExperiences, refFormation, refSkills, refProjets,
}) => (
  <nav className="menu">
    <ul className="menu">
      <li onClick={() => {
        const { top } = refAbout.current.getBoundingClientRect();
        window.scrollTo({ top, behavior: 'smooth' });
      }}
      >
        A propos
      </li>
      <li onClick={() => {
        const { top } = refExperiences.current.getBoundingClientRect();
        window.scrollTo({ top, behavior: 'smooth' });
      }}
      >
        Experiences
      </li>
      <li onClick={() => {
        const { top } = refFormation.current.getBoundingClientRect();
        window.scrollTo({ top, behavior: 'smooth' });
      }}
      >
        Formmation
      </li>
      <li onClick={() => {
        const { top } = refSkills.current.getBoundingClientRect();
        window.scrollTo({ top, behavior: 'smooth' });
      }}
      >
        Compétences
      </li>
      <li onClick={() => {
        const { top } = refProjets.current.getBoundingClientRect();
        window.scrollTo({ top, behavior: 'smooth' });
      }}
      >Projets
      </li>
    </ul>
  </nav>
);

export default Navbar;

Navbar.propTypes = {
  refAbout: PropTypes.object.isRequired,
  refExperiences: PropTypes.object.isRequired,
  refFormation: PropTypes.object.isRequired,
  refSkills: PropTypes.object.isRequired,
  refProjets: PropTypes.object.isRequired,
};
