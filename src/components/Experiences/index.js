/* eslint-disable max-len */
import './styles.scss';
import PropTypes from 'prop-types';

const Experiences = ({ refExperiences }) => (
  <div className="experiences__main" ref={refExperiences}>
    <h1>Expériences</h1>

    <div className="experiences__detail">
      <h2>Monteur</h2>
      <h3>Webedia - 2020 à février 2021</h3>
      <p>Dérushage, montage et habillage de capsule pour le département événement.</p>
    </div>

    <div className="experiences_detail">
      <h2>Content Coordination Manager</h2>
      <h3>PGS - Juillet 2019 à janvier 2020</h3>
      <ul>
        <li>Récupération des contenus auprès des producteurs (vérification des formats initiaux et des langues</li>
        <li>Gestion des prestataires (labo, doublage...).</li>
        <li>Encodage interne + labo.</li>
        <li>Asset manager.</li>
      </ul>
    </div>

    <div className="experiences_detail">
      <h2>Content Coordination Manager</h2>
      <h3>Marc Dorcel Groupe - Juillet 2017 à juillet 2019</h3>
      <ul>
        <li>Commandes de travaux et des prestations relatives aux
          contenus ainsi que leurs bonnes livraisons et mise à
          disposition (serveurs, FTP, HDD, Web…).
        </li>
        <li>Gestion réception, vérification, suivi, indexation et factures.</li>
        <li>Création de contenu diverses pour la TV/R.S et retouches au montage.</li>
        <li>Participation à l'éditorial.</li>
      </ul>
    </div>

    <div className="experiences_detail">
      <h2>Monteur / Réalisateur / Cadreur</h2>
      <h3>Auto-entrepreneur - 2015 à 2017</h3>
      <ul>
        <li>Références :
        </li>
        <li>Mixicom (Cyprien Gaming)</li>
        <li>Sikana (tutoriels - +2500 vidéos traitées)</li>
        <li>S.C.Y. (institutionnel)</li>
        <li>BuroLab - Club Versailles Affaires. (institutionnel)</li>
        <li>DemBets (eSport)</li>
        <li>Altitude Production (institutionnel)</li>
        <li>Papermade Pictures (documentaire)</li>
        <li>Le Mets du Roi (institutionnel)</li>
        <li>Star 24 (télévision)</li>
        <li>Ozyria / Owly Six (eSport - entertainement web)</li>
      </ul>
    </div>

    <div className="experiences_detail">
      <h2>Monteur</h2>
      <h3>2013 - 2015</h3>
      <ul>
        <li>Millenium (Best-of / Streamer).
        </li>
        <li>Blue Bird Production (documentaires)</li>
        <li>No Live TV (émission)</li>
        <li>Tourner Montrer (mode)</li>
      </ul>
    </div>
  </div>
);

export default Experiences;

Experiences.propTypes = {
  refExperiences: PropTypes.object.isRequired,
};
