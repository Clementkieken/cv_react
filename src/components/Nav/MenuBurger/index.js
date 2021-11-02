/* eslint-disable react/button-has-type */
import './styles.scss';
import PropTypes from 'prop-types';

const MenuBurger = ({
  refAbout, refExperiences, refFormation, refSkills, refProjets, refContact, navBanner,
}) => (
  <nav className="navbar">
    <div className="navbar__logo">Logo</div>
    <ul className="navbar__item">

      <div
        className="navbar__item"
        onClick={() => {
          const top = refAbout.current.offsetTop;
          window.scrollTo({ top: (top - navBanner.current.getBoundingClientRect().height), behavior: 'smooth' });
        }}
      >
        <li
          className="navbar__li"
        >
          A propos
        </li>
      </div>
      <div
        className="navbar__item"
        onClick={() => {
          const top = refExperiences.current.offsetTop;
          window.scrollTo({ top: (top - navBanner.current.getBoundingClientRect().height), behavior: 'smooth' });
        }}
      >
        <li
          className="navbar__li"
        >
          Experiences
        </li>
      </div>

      <div
        className="navbar__item"
        onClick={() => {
          const top = refFormation.current.offsetTop;
          window.scrollTo({ top: (top - navBanner.current.getBoundingClientRect().height), behavior: 'smooth' });
        }}
      >
        <li
          className="navbar__li"
        >
          Formation
        </li>
      </div>

      <div
        className="navbar__item"
        onClick={() => {
          const top = refSkills.current.offsetTop;
          window.scrollTo({ top: (top - navBanner.current.getBoundingClientRect().height), behavior: 'smooth' });
        }}
      >
        <li
          className="navbar__li"
        >
          Compétences
        </li>
      </div>

      <div
        className="navbar__item"
        onClick={() => {
          const top = refProjets.current.offsetTop;
          window.scrollTo({ top: (top - navBanner.current.getBoundingClientRect().height), behavior: 'smooth' });
        }}
      >
        <li
          className="navbar__li"
        >
          Projets
        </li>
      </div>

      <div
        className="navbar__item"
        onClick={() => {
          const top = refContact.current.offsetTop;
          window.scrollTo({ top: (top - navBanner.current.getBoundingClientRect().height), behavior: 'smooth' });
        }}
      >
        <li
          className="menu__li"
        >
          Contact
        </li>
      </div>
    </ul>
    <button className="navbar__btn">
      <span className="burger-bar">X</span>
    </button>
  </nav>

);

export default MenuBurger;

MenuBurger.propTypes = {
  refAbout: PropTypes.object.isRequired,
  refExperiences: PropTypes.object.isRequired,
  refFormation: PropTypes.object.isRequired,
  refSkills: PropTypes.object.isRequired,
  refProjets: PropTypes.object.isRequired,
  refContact: PropTypes.object.isRequired,
  navBanner: PropTypes.object.isRequired,
};
