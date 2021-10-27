/* eslint-disable jsx-a11y/iframe-has-title */
import { useState } from 'react';

import PropTypes from 'prop-types';
import { IoChevronDownOutline } from 'react-icons/io5';

import './styles.scss';
// Import Images
import logo from '../../../public/img/logo_v4.png';
import detectiv from '../../../public/img/detectiv.jpg';
import github from '../../../public/img/github.ico';
import soundboard from '../../../public/img/soundboard.jpg';

const Projets = ({ refProjets }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isYouTubeOpen, setIsYouTubeOpen] = useState(false);

  return (

    <div className="projet__main" ref={refProjets}>
      <h1 className="projet__main__title">Projets</h1>

      <div className="projet__main__category" onClick={() => setIsOpen((old) => !old)}>
        Développement Web <IoChevronDownOutline className={` dropdown__button__arrow ${isOpen ? 'dropdown__button__arrow__animation' : ''}`} />
      </div>
      {/* Div pour les projets de Dev */}
      {isOpen && (

        <div className="projet__detail">

          <div className="projet__detail__card">
            <a href="https://evadia.tech" target="_blank" rel="noreferrer">
              <img src={logo} alt="logo evadia" className="projet__detail__card__evadia" />
            </a>
            <div className="projet__detail__card__text">
              <h2 className="projet__detail__h2">Evadia</h2>
              <div className="projet__detail__h2__inner">&nbsp;</div>
              <h3 className="projet__detail__h3">Projet de fin d'étude O'Clock.</h3>
              <p className="projet__detail__p">Trouver la ville de votre rêve selon vos critères !</p>
              <a href="https://github.com/O-clock-Uther/projet-15-on-demenage" target="_blank" rel="noreferrer">
                <img src={github} alt="logo github" className="projet__detail__card__github" />
              </a>
            </div>
          </div>

          <div className="projet__detail__card">
            <a href="https://o-detectiv.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={detectiv} alt="logo odetctiv" className="projet__detail__card__detectiv" />
            </a>
            <div className="projet__detail__card__text">
              <h2 className="projet__detail__h2">O'Detectiv</h2>
              <div className="projet__detail__h2__inner">&nbsp;</div>
              <h3 className="projet__detail__h3">Projet test NodeJS</h3>
              <p className="projet__detail__p">Un exercice SQL enrobé dans une histoire trépidante !</p>
              <a href="https://github.com/Clementkieken/odetectiv" target="_blank" rel="noreferrer">
                <img src={github} alt="logo github" className="projet__detail__card__github" />
              </a>
            </div>
          </div>

          <div className="projet__detail__card">
            <a href="https://soundboard-tony-ank7hej9l-clementkieken.vercel.app/html" target="_blank" rel="noreferrer">
              <img src={soundboard} alt="logo soundboard" className="projet__detail__card__soundboard" />
            </a>
            <div className="projet__detail__card__text">
              <h2 className="projet__detail__h2">Soundboard Tony</h2>
              <div className="projet__detail__h2__inner">&nbsp;</div>
              <h3 className="projet__detail__h3">Projet test JS</h3>
              <p className="projet__detail__p">Un hommage à notre cher professeur de JavaScript, Tony Tiratay !</p>
              <a href="https://github.com/Clementkieken/Soundboard_Tony" target="_blank" rel="noreferrer">
                <img src={github} alt="logo github" className="projet__detail__card__github" />
              </a>
            </div>
          </div>
        </div>

      )}

      <div className="projet__transition" />

      <div className="projet__main__category" onClick={() => setIsYouTubeOpen((old) => !old)}>Audiovisuel <IoChevronDownOutline className={` dropdown__button__arrow ${isYouTubeOpen ? 'dropdown__button__arrow__animation' : ''}`} /></div>

      {isYouTubeOpen && (

      <div className="projet__youtube">

        <div className="projet__youtube__card">
          <iframe width="400" height="225" src="https://player.vimeo.com/video/639558298?h=0cbc81d7de&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          <div className="projet__detail__card__text">
            <h2 className="projet__detail__h2">Life & Dream</h2>
            <div className="projet__detail__h2__inner">&nbsp;</div>
            <h3 className="projet__detail__h3">2018</h3>
            <p className="projet__detail__p">Teaser pour le lancement de la chaîne Playboy TV Europe.</p>
          </div>
        </div>

        <div className="projet__youtube__card">
          <iframe width="400" height="225" src="https://www.youtube.com/embed/BX7jTEyCAzI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <div className="projet__detail__card__text">
            <h2 className="projet__detail__h2">Bande Démo</h2>
            <div className="projet__detail__h2__inner">&nbsp;</div>
            <h3 className="projet__detail__h3">2013 - 2017</h3>
            <p className="projet__detail__p">Courte bande démo de mes projets de cette époque.</p>
          </div>
        </div>

        <div className="projet__youtube__card">
          <iframe width="400" height="225" src="https://www.youtube.com/embed/Mu_hTKmQUuY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <div className="projet__detail__card__text">
            <h2 className="projet__detail__h2">Une journée avec Shneizel</h2>
            <div className="projet__detail__h2__inner">&nbsp;</div>
            <h3 className="projet__detail__h3">2017</h3>
            <p className="projet__detail__p">Reportage sur Shneizel à la Coupe de France Street Fighter V.</p>
          </div>
        </div>

        <div className="projet__youtube__card">
          <iframe width="400" height="225" src="https://www.youtube.com/embed/kQVAjkvORGk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <div className="projet__detail__card__text">
            <h2 className="projet__detail__h2">La Semaine de Retox #26</h2>
            <div className="projet__detail__h2__inner">&nbsp;</div>
            <h3 className="projet__detail__h3">2016</h3>
            <p className="projet__detail__p">Dernier épisode de notre chronique eSport.</p>
          </div>
        </div>

        <div className="projet__youtube__card">
          <iframe width="400" height="225" src="https://www.youtube.com/embed/xcccVMY1BMw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <div className="projet__detail__card__text">
            <h2 className="projet__detail__h2">Je suis un Geste</h2>
            <div className="projet__detail__h2__inner">&nbsp;</div>
            <h3 className="projet__detail__h3">2015</h3>
            <p className="projet__detail__p">Court métrage de S. Koiransky - Nikon Film Festival.</p>
          </div>
        </div>

        <div className="projet__youtube__card">
          <iframe width="400" height="225" src="https://www.youtube.com/embed/TSaiYZISFXA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <div className="projet__detail__card__text">
            <h2 className="projet__detail__h2">Burolab - Versailles</h2>
            <div className="projet__detail__h2__inner">&nbsp;</div>
            <h3 className="projet__detail__h3">2015</h3>
            <p className="projet__detail__p">Découvrez cet espace co-working de Versailles.</p>
          </div>
        </div>

      </div>
      )}
    </div>

  );
};

export default Projets;

Projets.propTypes = {
  refProjets: PropTypes.object.isRequired,
};
