// import { NavLink } from 'react-router-dom';
// import About from '../About';
import './styles.scss';

const Navbar = () => (
  <nav className="menu">
    {/* <NavLink
      to="/"
    >
      <About />
    </NavLink> */}
    <ul className="menu">
      <li>A propos</li>
      <li>Expériences</li>
      <li>Formation</li>
      <li>Compétences</li>
      <li>Projets</li>
    </ul>
  </nav>
);

export default Navbar;
