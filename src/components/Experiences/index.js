/* eslint-disable max-len */
import './styles.scss';
import PropTypes from 'prop-types';

const Experiences = ({ refExperiences }) => (
  <div className="experiences__main" ref={refExperiences}>
    <h1 className="experiences__main__title">Expériences</h1>

    <div className="experiences__detail">
      <h2 className="experiences__detail__h2">Product Owner & Développeur FrontEnd</h2>
      <h3 className="experiences__detail__h3"><a href="https://evadia.tech" target="_blank" rel="noopener noreferrer" className="experiences__detail__h3__link">Evadia</a> (<a href="https://oclock.io/" target="_blank" rel="noopener noreferrer" className="experiences__detail__h3__link">O'Clock</a>) -
        <span className="experiences__detail__h3__date"> Septembre à Octobre 2021</span>
      </h3>
      <ul className="experiences__detail__ul">
        <li className="experiences__detail__li">Prise de décision UI et UX.</li>
        <li className="experiences__detail__li">Développement des components React en binôme.</li>
        <li className="experiences__detail__li">Développement de quelques fonctionnalités React.</li>
        <li className="experiences__detail__li">Présentation du projet pour client.</li>
      </ul>
    </div>

    <div className="experiences__detail">
      <h2 className="experiences__detail__h2">Monteur</h2>
      <h3 className="experiences__detail__h3"><a href="https://fr.webedia-group.com/" target="_blank" rel="noopener noreferrer" className="experiences__detail__h3__link">Webedia</a> -
        <span className="experiences__detail__h3__date"> 2020 à février 2021</span>
      </h3>
      <p className="experiences__detail__p">Dérushage, montage et habillage de capsule pour le département événement (event BNP).</p>
    </div>

    <div className="experiences__detail">
      <h2 className="experiences__detail__h2">Content Coordination Manager</h2>
      <h3 className="experiences__detail__h3"><a href="https://pgsentertainment.com/" target="_blank" rel="noopener noreferrer" className="experiences__detail__h3__link"> PGS</a> -
        <span className="experiences__detail__h3__date"> Juillet 2019 à janvier 2020</span>
      </h3>
      <ul className="experiences__detail__ul">
        <li className="experiences__detail__li">Récupération des contenus auprès des producteurs (vérification des formats initiaux et des langues</li>
        <li className="experiences__detail__li">Gestion des prestataires (labo, doublage...).</li>
        <li className="experiences__detail__li">Encodage interne + labo.</li>
        <li className="experiences__detail__li">Asset manager.</li>
      </ul>
    </div>

    <div className="experiences__detail">
      <h2 className="experiences__detail__h2">Content Coordination Manager</h2>
      <h3 className="experiences__detail__h3"><a href="https://www.dorcelgroup.com/" target="_blank" rel="noopener noreferrer" className="experiences__detail__h3__link"> Marc Dorcel Groupe</a>
        <span className="experiences__detail__h3__date"> - Juillet 2017 à juillet 2019</span>
      </h3>
      <ul className="experiences__detail__ul">
        <li className="experiences__detail__li">Commandes de travaux et des prestations relatives aux
          contenus ainsi que leurs bonnes livraisons et mise à
          disposition (serveurs, FTP, HDD, Web…).
        </li>
        <li className="experiences__detail__li">Gestion réception, vérification, suivi, indexation et factures.</li>
        <li className="experiences__detail__li">Création de contenu diverses pour la TV/R.S et retouches au montage.</li>
        <li className="experiences__detail__li">Participation à l'éditorial.</li>
      </ul>
    </div>

    <div className="experiences__detail">
      <h2 className="experiences__detail__h2">Monteur / Réalisateur / Cadreur</h2>
      <h3 className="experiences__detail__h3"><a href="https://www.youtube.com/user/clementkieken" target="_blank" rel="noopener noreferrer" className="experiences__detail__h3__link"> Auto-entrepreneur</a>
        <span className="experiences__detail__h3__date"> - 2015 à 2017</span>
      </h3>
      <ul className="experiences__detail__ul">
        <li className="experiences__detail__li">Références :
        </li>
        <li className="experiences__detail__li">Mixicom (Cyprien Gaming)</li>
        <li className="experiences__detail__li">Sikana (tutoriels - +2500 vidéos traitées)</li>
        <li className="experiences__detail__li">S.C.Y. (institutionnel)</li>
        <li className="experiences__detail__li">BuroLab - Club Versailles Affaires. (institutionnel)</li>
        <li className="experiences__detail__li">DemBets (eSport)</li>
        <li className="experiences__detail__li">Altitude Production (institutionnel)</li>
        <li className="experiences__detail__li">Papermade Pictures (documentaire)</li>
        <li className="experiences__detail__li">Le Mets du Roi (institutionnel)</li>
        <li className="experiences__detail__li">Star 24 (télévision)</li>
        <li className="experiences__detail__li">Ozyria / Owly Six (eSport - entertainement web)</li>
      </ul>
    </div>

    <div className="experiences__detail">
      <h2 className="experiences__detail__h2">Monteur</h2>
      <h3 className="experiences__detail__h3"> Stages & CDD -
        <span className="experiences__detail__h3__date"> 2013 à 2015</span>
      </h3>
      <ul className="experiences__detail__ul">
        <li className="experiences__detail__li">Millenium (Best-of / Streamer).
        </li>
        <li className="experiences__detail__li">Blue Bird Production (documentaires)</li>
        <li className="experiences__detail__li">No Live TV (émission)</li>
        <li className="experiences__detail__li">Tourner Montrer (mode)</li>
      </ul>
    </div>
  </div>
);

export default Experiences;

Experiences.propTypes = {
  refExperiences: PropTypes.object.isRequired,
};
