import './styles.scss';
import PropTypes from 'prop-types';
import logo from '../../../public/img/logo_v4.png';
import detectiv from '../../../public/img/detectiv.jpg';
import github from '../../../public/img/github.ico';
import soundboard from '../../../public/img/soundboard.jpg';

const Projets = ({ refProjets }) => (

  <div className="projet__main" ref={refProjets}>
    <h1 className="projet__main__title">Projets</h1>

    <div className="projet__detail">

      <div className="projet__detail__card">
        <a href="https://evadia.tech" target="_blank" rel="noreferrer">
          <img src={logo} alt="logo evadia" className="projet__detail__card__img" />
        </a>
        <div className="projet__detail__card__text">
          <h2 className="projet__detail__h2">Evadia</h2>
          <p className="projet__detail__p">Projet de fin d'étude O'Clock.</p>
          <p className="projet__detail__p">Trouver la ville de votre rêve selon vos critères !</p>
          <a href="https://github.com/O-clock-Uther/projet-15-on-demenage" target="_blank" rel="noreferrer">
            <img src={github} alt="logo github" className="projet__detail__card__github" />
          </a>
        </div>
      </div>

      <div className="projet__detail__card">
        <a href="https://o-detectiv.herokuapp.com/" target="_blank" rel="noreferrer">
          <img src={detectiv} alt="logo odetctiv" className="projet__detail__card__img__detectiv" />
        </a>
        <div className="projet__detail__card__text">
          <h2 className="projet__detail__h2">O'Detectiv</h2>
          <p className="projet__detail__p">Projet test NodeJS</p>
          <p className="projet__detail__p">Un exercice SQL enrobé dans une histoire trépidante !</p>
          <a href="https://github.com/Clementkieken/odetectiv" target="_blank" rel="noreferrer">
            <img src={github} alt="logo github" className="projet__detail__card__github" />
          </a>
        </div>
      </div>

      <div className="projet__detail__card">
        <a href="https://soundboard-tony-ank7hej9l-clementkieken.vercel.app/html" target="_blank" rel="noreferrer">
          <img src={soundboard} alt="logo soundboard" className="projet__detail__card__img__soundboard" />
        </a>
        <div className="projet__detail__card__text">
          <h2 className="projet__detail__h2">Soundboard Tony</h2>
          <p className="projet__detail__p">Projet test JS</p>
          <p className="projet__detail__p">Un hommage à notre cher professeur de JavaScript, Tony Tiratay !</p>
          <a href="https://github.com/Clementkieken/Soundboard_Tony" target="_blank" rel="noreferrer">
            <img src={github} alt="logo github" className="projet__detail__card__github" />
          </a>
        </div>
      </div>

    </div>
  </div>

);

export default Projets;

Projets.propTypes = {
  refProjets: PropTypes.object.isRequired,
};
