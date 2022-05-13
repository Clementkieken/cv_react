/* eslint-disable max-len */
import './styles.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';

import evadia from '../../../public/img/9tq.png';
import webedia from '../../../public/img/resize/webedia.png';
import pgs from '../../../public/img/resize/pgs.png';
import dorcel from '../../../public/img/resize/dorcel.png';
import cat from '../../../public/img/resize/cool_cat.png';
import millenium from '../../../public/img/resize/Millenium_E-Sport_Logo_2.png';

const Experiences = ({ refExperiences }) => {
  const [evadiaOpen, setEvadiaOpen] = useState(false);
  const [webediaOpen, setWebediaOpen] = useState(false);
  const [pgsOpen, setPgsOpen] = useState(false);
  const [vmdOpen, setVmdOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [milleniumOpen, setMilleniumOpen] = useState(false);

  return (

    <div className="experiences__main" ref={refExperiences}>
      <h1 className="experiences__main__title">Expériences</h1>

      <div className="experiences__flex">
        <div className="experiences__detail">
          <div className="experiences__detail__img">
            <a href="https://9tq.fr/" target="_blank" rel="noopener noreferrer">
              <img className="experiences__detail__logo" src={evadia} alt="9tq logo" />
            </a>
          </div>
          <div className="experiences__detail__text">
            <h2 className="experiences__detail__text__h2">Chef de Projet Web</h2>
            <h3 className="experiences__detail__text__h3">9TroisQuarts (<a href="https://9tq.fr/" target="_blank" rel="noopener noreferrer" className="experiences__detail__h3__link">O'Clock</a>) -
              <span className="experiences__detail__text__h3__date"> Déc. 2021 à juin 2022</span>
            </h3>

            <div className="experiences__detail__category" onClick={() => setEvadiaOpen((old) => !old)}>
              Missions  <IoChevronDownOutline className={` dropdown__button__arrow ${evadiaOpen ? 'dropdown__button__arrow__animation' : ''}`} />
            </div>
            {evadiaOpen && (
            <ul className="experiences__detail__text__ul">
              <li className="experiences__detail__text__li">• Prise de décision UI et UX.</li>
              <li className="experiences__detail__text__li">• Suivi et gestion des projets web en cours.</li>
              <li className="experiences__detail__text__li">• Suivi maintenance et qualité des produits.</li>
              <li className="experiences__detail__text__li">• Présentation de projets aux clients.</li>
            </ul>
            )}

          </div>

        </div>

        <div className="experiences__detail">
          <div className="experiences__detail__img">
            <a href="https://fr.webedia-group.com/" target="_blank" rel="noopener noreferrer" className="experiences__detail__h3__link">
              <img className="experiences__detail__logo" src={webedia} alt="webedia logo" />
            </a>
          </div>
          <div className="experiences__detail__text">
            <h2 className="experiences__detail__text__h2">Monteur</h2>
            <h3 className="experiences__detail__text__h3">Webedia -
              <span className="experiences__detail__text__h3__date"> Décembre 2020 à février 2021</span>
            </h3>

            <div className="experiences__detail__category" onClick={() => setWebediaOpen((old) => !old)}>
              Missions  <IoChevronDownOutline className={` dropdown__button__arrow ${webediaOpen ? 'dropdown__button__arrow__animation' : ''}`} />
            </div>
            {webediaOpen && (
            <ul className="experiences__detail__text__ul">
              <li className="experiences__detail__text__li">• Dérushage, montage et habillage de capsule pour le département événement (event BNP).</li>
            </ul>
            )}
          </div>
        </div>

        <div className="experiences__detail">
          <div className="experiences__detail__img">
            <a href="https://pgsentertainment.com/" target="_blank" rel="noopener noreferrer" className="experiences__detail__h3__link">
              <img className="experiences__detail__logo" src={pgs} alt="pgs logo" />
            </a>
          </div>
          <div className="experiences__detail__text">
            <h2 className="experiences__detail__text__h2">Content Coordination Manager</h2>
            <h3 className="experiences__detail__text__h3">PGS -
              <span className="experiences__detail__text__h3__date"> Juillet 2019 à janvier 2020</span>
            </h3>

            <div className="experiences__detail__category" onClick={() => setPgsOpen((old) => !old)}>
              Missions  <IoChevronDownOutline className={` dropdown__button__arrow ${pgsOpen ? 'dropdown__button__arrow__animation' : ''}`} />
            </div>
            {pgsOpen && (
            <ul className="experiences__detail__text__ul">
              <li className="experiences__detail__text__li">• Récupération des contenus auprès des producteurs (vérification des formats initiaux et des langues</li>
              <li className="experiences__detail__text__li">• Gestion des prestataires (labo, doublage...).</li>
              <li className="experiences__detail__text__li">• Encodage interne + labo.</li>
              <li className="experiences__detail__text__li">• Asset manager.</li>
            </ul>
            )}
          </div>
        </div>

        <div className="experiences__detail">
          <div className="experiences__detail__img">
            <a href="https://www.dorcelgroup.com/" target="_blank" rel="noopener noreferrer" className="experiences__detail__h3__link">
              <img className="experiences__detail__logo" src={dorcel} alt="dorcel logo" />
            </a>
          </div>
          <div className="experiences__detail__text">
            <h2 className="experiences__detail__text__h2">Content Coordination Manager</h2>
            <h3 className="experiences__detail__text__h3">Marc Dorcel Groupe
              <span className="experiences__detail__text__h3__date"> - Juillet 2017 à juillet 2019</span>
            </h3>

            <div className="experiences__detail__category" onClick={() => setVmdOpen((old) => !old)}>
              Missions  <IoChevronDownOutline className={` dropdown__button__arrow ${vmdOpen ? 'dropdown__button__arrow__animation' : ''}`} />
            </div>
            {vmdOpen && (
            <ul className="experiences__detail__text__ul">
              <li className="experiences__detail__text__li">• Commandes de travaux et des prestations relatives aux
                contenus ainsi que leurs bonnes livraisons et mise à
                disposition (serveurs, FTP, HDD, Web…).
              </li>
              <li className="experiences__detail__text__li">• Gestion réception, vérification, suivi, indexation et factures.</li>
              <li className="experiences__detail__text__li">• Création de contenu diverses pour la TV/R.S et retouches au montage.</li>
              <li className="experiences__detail__text__li">• Participation à l'éditorial.</li>
            </ul>
            )}
          </div>
        </div>

        <div className="experiences__detail">
          <div className="experiences__detail__img">
            <a href="https://www.youtube.com/user/clementkieken" target="_blank" rel="noopener noreferrer" className="experiences__detail__h3__link">
              <img className="experiences__detail__logo" src={cat} alt="cat logo" />
            </a>
          </div>
          <div className="experiences__detail__text">
            <h2 className="experiences__detail__text__h2">Monteur / Réalisateur / Cadreur</h2>
            <h3 className="experiences__detail__text__h3">Auto-entrepreneur
              <span className="experiences__detail__text__h3__date"> - 2015 à 2017</span>
            </h3>

            <div className="experiences__detail__category" onClick={() => setCatOpen((old) => !old)}>
              Missions  <IoChevronDownOutline className={` dropdown__button__arrow ${catOpen ? 'dropdown__button__arrow__animation' : ''}`} />
            </div>
            {catOpen && (
            <ul className="experiences__detail__text__ul">
              <li className="experiences__detail__text__li">Références :
              </li>
              <li className="experiences__detail__text__li">• Mixicom (Cyprien Gaming)</li>
              <li className="experiences__detail__text__li">• Sikana (tutoriels - +2500 vidéos traitées)</li>
              <li className="experiences__detail__text__li">• S.C.Y. (institutionnel)</li>
              <li className="experiences__detail__text__li">• BuroLab - Club Versailles Affaires. (institutionnel)</li>
              <li className="experiences__detail__text__li">• DemBets (eSport)</li>
              <li className="experiences__detail__text__li">• Altitude Production (institutionnel)</li>
              <li className="experiences__detail__text__li">• Papermade Pictures (documentaire)</li>
              <li className="experiences__detail__text__li">• Le Mets du Roi (institutionnel)</li>
              <li className="experiences__detail__text__li">• Star 24 (télévision)</li>
              <li className="experiences__detail__text__li">• Ozyria / Owly Six (eSport - entertainement web)</li>
            </ul>
            )}
          </div>
        </div>

        <div className="experiences__detail">
          <div className="experiences__detail__img">
            <a href="https://www.millenium.org/" target="_blank" rel="noopener noreferrer" className="experiences__detail__h3__link">
              <img className="experiences__detail__logo" src={millenium} alt="millenium logo" />
            </a>
          </div>
          <div className="experiences__detail__text">
            <h2 className="experiences__detail__text__h2">Monteur</h2>
            <h3 className="experiences__detail__text__h3"> Stages & CDD -
              <span className="experiences__detail__text__h3__date"> 2013 à 2015</span>
            </h3>

            <div className="experiences__detail__category" onClick={() => setMilleniumOpen((old) => !old)}>
              Missions  <IoChevronDownOutline className={` dropdown__button__arrow ${milleniumOpen ? 'dropdown__button__arrow__animation' : ''}`} />
            </div>
            {milleniumOpen && (
            <ul className="experiences__detail__text__ul">
              <li className="experiences__detail__text__li">• Millenium (Best-of / Streamer).
              </li>
              <li className="experiences__detail__text__li">• Blue Bird Production (documentaires)</li>
              <li className="experiences__detail__text__li">• No Live TV (émission)</li>
              <li className="experiences__detail__text__li">• Tourner Montrer (mode)</li>
            </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;

Experiences.propTypes = {
  refExperiences: PropTypes.object.isRequired,
};
