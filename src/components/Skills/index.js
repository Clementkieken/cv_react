import './styles.scss';
import PropTypes from 'prop-types';

const Skills = ({ refSkills }) => (
  <div className="skills__main" ref={refSkills}>
    <h1>Compétences</h1>

    <div className="skills__detail">
      <h2>Développeur</h2>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>NodeJS</li>
        <li>MySQL</li>
        <li>VueJS</li>
        <li>Express</li>
        <li>Sequelize</li>
        <li>HTML/CSS</li>
      </ul>
    </div>

    <div className="skills__detail">
      <h2>Montage audiovisuel</h2>
      <ul>
        <li>Première Pro</li>
        <li>Photoshop</li>
        <li>After Effect</li>
        <li>Avid</li>
        <li>FCP 7</li>
        <li>Media Encoder</li>
        <li>Shutter Encoder</li>
      </ul>
    </div>

    <div className="skills__detail">
      <h2>Langue</h2>
      <ul>
        <li>Anglais</li>
      </ul>
    </div>

    <div className="skills__detail">
      <h2>Divers</h2>
      <ul>
        <li>Auteur du mémoire "La Place du Monteur dans l'eSport" en 2013.</li>
        <li>Chef de guilde sur World of Warcraft depuis 10 ans.</li>
      </ul>
    </div>

  </div>
);

export default Skills;

Skills.propTypes = {
  refSkills: PropTypes.object.isRequired,
};
