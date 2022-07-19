/* eslint-disable max-len */
import './styles.scss';
import PropTypes from 'prop-types';

const Formation = ({ refFormation }) => (
  <div className="formations" ref={refFormation}>
    <h1 className="formations__title">Formations</h1>
    <div className="formations__all">

      <div className="formations__details">
        <h2 className="formations__details__h2">Développeur Web Full Stack JavaScript React</h2>
        <h3 className="formations__details__h3">O'Clock - Mai 2021 à octobre 2021</h3>
        <div className="formations__details_paragraphe">
          <ul className="formations__details_ul">
            <li className="formations__details__li">• <span className="bold">798 h</span> intensives.</li>
            <li className="formations__details__li">• <span className="bold">3 mois</span> de Socle: HTML5 / CSS3 / Javascript / NodeJS / PostgreSQL.</li>
            <li className="formations__details__li">• <span className="bold">1 mois</span> de spécialisation en React.</li>
            <li className="formations__details__li">• <span className="bold">1 mois</span> de projet.</li>
          </ul>
          {/* <p className="formations__details__p"> Pendant <span className="bold">3 mois</span> nous avons appris les bases du code avec comme langage principal <span className="bold">JavaScript</span> que ce soit en front (JS Vanilla) ou en back (<span className="bold">NodeJS</span> mais aussi la BDD avec <span className="bold">PostgreSQL</span>). Chaque jour nous avons appris de nouvelles notions et le soir nous avions des exercices concernant à la fois les notions du jour et également une notion à découvrir par nous même afin de nous familiariser avec la recherche sur la documentation.</p> */}
          <p className="formations__details__p">Après les 3 mois de socle, je me suis spécialisé en <span className="bold">React</span> pendant un mois où j'ai également vu <span className="bold">Redux</span>.</p>
          <p className="formations__details__p">Enfin, lors du dernier mois, nous nous sommes séparés en plusieurs groupes de 4 à 5 étudiants où nous avons créé un site web responsive mobile. Notre projet, <span className="formations__details__evadia"><a href="https://evadia.tech" target="_blank" rel="noreferrer">Evadia</a></span>, condense de multiples API des communes française en une, afin d'obtenir toutes les informations nécessaires quand vous déménagez ou partez en week-end dans un lieu. Voir les détails dans l'onglet Projets.</p>
        </div>
      </div>

      <div className="formations__details__transition" />

      <div className="formations__details">
        <h2 className="formations__details__h2">Chef Monteur de niveau 3</h2>
        <h3 className="formations__details__h3">Insitut de l'Image et du Son (3iS) - 2010 à 2013</h3>
        <ul className="formations__details__ul">
          <li className="formations__details__li">Montage.</li>
          <li className="formations__details__li">Post-production.</li>
          <li className="formations__details__li">Prise et traitement Son.</li>
          <li className="formations__details__li">Image (lumière, caméra).</li>
          <li className="formations__details__li">3 court métrages.</li>
        </ul>
      </div>

      <div className="formations__details__transition" />

      <div className="formations__details">
        <h2 className="formations__details__h2">Bacalauréat</h2>
        <h3 className="formations__details__h3">EABJM - 2006 à 2009</h3>
        <ul className="formations__details__ul">
          <li className="formations__details__li">BAC L option philosophie / anglais.</li>
        </ul>
      </div>
    </div>

  </div>
);

export default Formation;

Formation.propTypes = {
  refFormation: PropTypes.object.isRequired,
};
