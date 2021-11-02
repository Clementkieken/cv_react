/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
import './styles.scss';
import PropTypes from 'prop-types';
// import { useState } from 'react';

// == Les éléments commentés sont une tentative de création de Burger Menu pour la NavBar en version mobile.

const Navbar = ({
  refAbout, refExperiences, refFormation, refSkills, refProjets, refContact, navColor, navBanner,
}) => (
  // const [menuOpen, setMenuOpen] = useState(false);
  // const handleMenuOpen = () => {
  //   setMenuOpen(!menuOpen);
  // };

  <nav
    className={`menu ${navColor}`}
    ref={navBanner}
  >

    {/* <nav
      className={`menu ${navColor} ${menuOpen ? 'show-nav' : 'hide-nav'} `}
      ref={navBanner}
    > */}
    <ul className="menu__items">

      <div
        className="menu__item_one"
        onClick={() => {
          const top = refAbout.current.offsetTop;
          window.scrollTo({ top: (top - navBanner.current.getBoundingClientRect().height), behavior: 'smooth' });
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
          const top = refExperiences.current.offsetTop;
          window.scrollTo({ top: (top - navBanner.current.getBoundingClientRect().height), behavior: 'smooth' });
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
          const top = refFormation.current.offsetTop;
          window.scrollTo({ top: (top - navBanner.current.getBoundingClientRect().height), behavior: 'smooth' });
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
          const top = refSkills.current.offsetTop;
          window.scrollTo({ top: (top - navBanner.current.getBoundingClientRect().height), behavior: 'smooth' });
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
          const top = refProjets.current.offsetTop;
          window.scrollTo({ top: (top - navBanner.current.getBoundingClientRect().height), behavior: 'smooth' });
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
    {/* <button
        className="navbar__btn"
        onClick={handleMenuOpen}
      >
        X
      </button> */}
  </nav>
);

export default Navbar;

Navbar.propTypes = {
  refAbout: PropTypes.object.isRequired,
  refExperiences: PropTypes.object.isRequired,
  refFormation: PropTypes.object.isRequired,
  refSkills: PropTypes.object.isRequired,
  refProjets: PropTypes.object.isRequired,
  refContact: PropTypes.object.isRequired,
  navColor: PropTypes.string.isRequired,
  navBanner: PropTypes.object.isRequired,
};
