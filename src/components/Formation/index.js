import './styles.scss';
import PropTypes from 'prop-types';

const Formation = ({ refFormation }) => (
  <div className="formations__main" ref={refFormation}>
    <h1>Formations</h1>

    <div className="formations__details">
      <h2>Développeur Web Full Stack JavaScript React</h2>
      <h3>O'Clock - Mai 2021 à octobre 2021</h3>
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

    <div className="formations__details">
      <h2>Chef Monteur de niveau 3</h2>
      <h3>Insitut de l'Iamge et du Son (3iS) - 2010 à 2013</h3>
      <ul>
        <li>Montage</li>
        <li>Prise et traitement Son</li>
        <li>Post-production</li>
        <li>Image (lumière, caméra)</li>
      </ul>
    </div>

    <div className="formations__details">
      <h2>Bacalauréat</h2>
      <h3>EABJM - 2006 à 2009</h3>
      <p>BAC L option philosophie / anglais.</p>
    </div>

  </div>
);

export default Formation;

Formation.propTypes = {
  refFormation: PropTypes.object.isRequired,
};
