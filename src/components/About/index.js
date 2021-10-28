/* eslint-disable max-len */
import './styles.scss';
import PropTypes from 'prop-types';
import moipp from '../../../public/img/ck_super_dev.jpg';

const About = ({ refAbout }) => (
  <div className="about__main" ref={refAbout}>
    <div className="about__profil">
      <h1 className="about__h1">Clément <span className="about__h1_name">KIEKEN</span></h1>
      <h2 className="about__h2">Développeur FrontEnd / Monteur audiovisuel</h2>
      <div className="about__img">
        <a href="https://github.com/Clementkieken" target="_blank" rel="noreferrer">
          <img className="about__img" src={moipp} alt="profil" />
        </a>
      </div>
    </div>
    <div className="about__p">
      <p>Après une petite dizaine d'années dans le monde de l'audiovisuel en tant que Chef monteur, réalisateur, cadreur et manager de contenu, j'ai décidé en 2020 de me renconvertir dans le développement web.
        Les similitudes entre mon expérience dans l'audiovisuel et le développement sont nombreuses, ne serait-ce que l'organisation absolument requise, savoir réagir avec rapidité et efficacité face à l'imprévu et multiplier les casquettes afin de faire preuve de flexbilité pour la bonne tenue d'un projet.
        J'ai alors suivi la formation intensive FullStack JavaScript de O'Clock pendant cinq mois en 2021, spécialisé en React, apprenant au passage de nombreuses notions tel que Redux, NodeJS, MySQL, Express et EJS.
      </p>
    </div>
  </div>
);

export default About;

About.propTypes = {
  refAbout: PropTypes.object.isRequired,
};
