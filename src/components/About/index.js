/* eslint-disable max-len */
import './styles.scss';
import PropTypes from 'prop-types';
import moipp from '../../../public/img/ck_super_dev.jpg';

const About = ({ refAbout }) => (
  <div className="about__main" ref={refAbout}>
    <div className="about__profil">
      <h1 className="about__h1">Clément <span className="about__h1_name">KIEKEN</span></h1>
      <h2 className="about__h2">Monteur audiovisuel / Chef de projet web</h2>
      <div className="about__img">
        <a href="https://github.com/Clementkieken" target="_blank" rel="noreferrer">
          <img className="about__img" src={moipp} alt="profil" />
        </a>
      </div>
    </div>
    <div className="about__p">
      <p>Multi-casquette, je suis passionné de tous les aspects de l'audiovisuel, de sa pré-production jusqu'à son rendu final. Spécialisé en montage depuis une petite dizaine d'années maintenant, j'ai pu avoir la chance de toucher à différents domaines
        tel que le documentaire, l'insitutionnel, le court-métrage, la pub, les tutoriels, le web, le reportage etc. </p>

      <p>En 2020, suite au Covid, j'ai suivi une formation de développeur / chef de projet web afin d'ajouter une corde à mon arc tout en pouvant continuer 
        à parfaire mes compétences dans l'audiovisuel ; les similitudes dans ces deux domaines étant assez proche (organisation, rigueur, planification, développement d'un projet).
      </p>
    </div>
  </div>
);

export default About;

About.propTypes = {
  refAbout: PropTypes.object.isRequired,
};
