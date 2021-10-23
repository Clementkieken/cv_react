// import { NavLink } from 'react-router-dom';
// import About from '../About';
import './styles.scss';
import PropTypes from 'prop-types';

const Navbar = ({
  refAbout, refExperiences, refFormation, refSkills, refProjets,
}) => (
  <nav className="menu">
    <ul className="menu__items">

      <div
        className="menu__item_one"
        onClick={() => {
          const { top } = refAbout.current.getBoundingClientRect();
          window.scrollTo({ top, behavior: 'smooth' });
        }}
      >
        <li
          className="menu__li"
        >
          A propos
        </li>
      </div>

      <div
        className="menu__item_one"
        onClick={() => {
          const { top } = refExperiences.current.getBoundingClientRect();
          window.scrollTo({ top: (top - 88), behavior: 'smooth' });
          // Le -88 sert à décaler le component pour ne pas qu'il soit caché par la navBar
        }}
      >
        <li
          className="menu__li"

        >
          Experiences
        </li>
      </div>

      <div
        className="menu__item_one"
        onClick={() => {
          const { top } = refFormation.current.getBoundingClientRect();
          window.scrollTo({ top: (top - 88), behavior: 'smooth' });
        }}
      >
        <li
          className="menu__li"
        >
          Formation
        </li>
      </div>

      <div
        className="menu__item_one"
        onClick={() => {
          const { top } = refSkills.current.getBoundingClientRect();
          window.scrollTo({ top: (top - 80), behavior: 'smooth' });
        }}
      >
        <li
          className="menu__li"
        >
          Compétences
        </li>
      </div>

      <div
        className="menu__item_one"
        onClick={() => {
          const { top } = refProjets.current.getBoundingClientRect();
          window.scrollTo({ top: (top - 80), behavior: 'smooth' });
        }}
      >
        <li
          className="menu__li"
        >
          Projets
        </li>
      </div>

      <div
        className="menu__item_one"
        onClick={() => {
          const { top } = refProjets.current.getBoundingClientRect();
          window.scrollTo({ top: (top - 88), behavior: 'smooth' });
        }}
      >
        <li
          className="menu__li"
        >
          Contact
        </li>
      </div>

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
