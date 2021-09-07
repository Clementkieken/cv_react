/* eslint-disable max-len */
import './styles.scss';
import reactLogo from '../App/react-logo.svg';

const About = () => (
  <div className="Container">
    <h1>Clément KIEKEN</h1>
    <h2>Développeur web / Monteur audiovisuel</h2>
    <img src={reactLogo} className="profil_picture" alt="profil" />
    <p>Après une petite dizaine d'années dans le monde de l'audiovisuel en tant que Chef monteur, réalisateur, cadreur et manager de contenu, j'ai décidé en 2020 de me renconvertir dans le développement web.
      Les similitudes entre mon expérience dans l'audiovisuel et le développement sont nombreuses, ne serait-ce que l'organisation absolument requise, savoir faire face avec rapidité et efficacité face à l'imprévu et multiplier les casquettes afin de faire preuve de flexbilité pour la bonne tenue d'un projet.
      J'ai alors suivi la formation intensive FullStack JavaScript de O'Clock pendant six mois en 2021, spécialisé en React, apprenant au passage de nombreuses notions sur des langages tel que NodeJS, MySQL, Express, Sequelize et VueJS.
    </p>
  </div>
);

export default About;
