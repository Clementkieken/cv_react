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
          <p className="formations__details__p"> Pendant 4 mois nous avons appris les bases du code avec comme langage principal JavaScript que ce soit en front (JS Vanilla) ou en back (NodeJS mais aussi la BDD avec PostgreSQL). Chaque jour nous avons appris de nouvelles notions et le soir nous avions des exercices concernant à la fois les notions du jour et également une notion à découvrir par nous même afin de nous familiariser avec la recherche sur la documentation.</p>
          <p className="formations__details__p">Puis pendant un mois nous nous sommes spécialisés en spé React où nous avons vu également Redux.</p>
          <p className="formations__details__p">Enfin, lors du dernier mois, nous nous sommes séparés en plusieurs groupe de 4 à 5 étudiant où nous avons créé un site web responsive mobile. Notre projet, "Evadia", permet de condenser de multiples API sur des communes afin d'avoir toutes les informations nécessaires quand vous déménagez ou partez en week-end dans un lieu. Voir les détails dans l'onglet Projets.</p>
        </div>
      </div>

      <div className="formations__details__transition" />

      <div className="formations__details">
        <h2 className="formations__details__h2">Chef Monteur de niveau 3</h2>
        <h3 className="formations__details__h3">Insitut de l'Image et du Son (3iS) - 2010 à 2013</h3>
        <ul>
          <li className="formations__details__li">Montage</li>
          <li className="formations__details__li">Prise et traitement Son</li>
          <li className="formations__details__li">Post-production</li>
          <li className="formations__details__li">Image (lumière, caméra)</li>
        </ul>
      </div>

      <div className="formations__details__transition" />

      <div className="formations__details">
        <h2 className="formations__details__h2">Bacalauréat</h2>
        <h3 className="formations__details__h3">EABJM - 2006 à 2009</h3>
        <ul>
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
