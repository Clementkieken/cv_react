import './styles.scss';
import PropTypes from 'prop-types';

// Import logo

import reactlogo from '../../../public/img/react.ico';
import htmllogo from '../../../public/img/html.ico';
import csslogo from '../../../public/img/css.ico';
import jslogo from '../../../public/img/js.ico';
import reduxlogo from '../../../public/img/redux.ico';
import nodelogo from '../../../public/img/nodejs.ico';
import postlogo from '../../../public/img/postgresql.ico';
import ejslogo from '../../../public/img/ejs.ico';
import expresslogo from '../../../public/img/express.png';
import gitlogo from '../../../public/img/github.ico';

import aelogo from '../../../public/img/ae.ico';
import prlogo from '../../../public/img/pr.ico';
import pslogo from '../../../public/img/ps.ico';
import fcplogo from '../../../public/img/fcp.ico';
import melogo from '../../../public/img/me.ico';
import avidlogo from '../../../public/img/avid.ico';
import shutterlogo from '../../../public/img/shutter.ico';

import englogo from '../../../public/img/engflag.ico';
import frlogo from '../../../public/img/frflag.ico';

import wordlogo from '../../../public/img/word.ico';
import excellogo from '../../../public/img/excel.ico';
import sflogo from '../../../public/img/salesforce.ico';
import gdoclogo from '../../../public/img/gdoc.ico';

const Skills = ({ refSkills }) => (
  <div className="skills" ref={refSkills}>
    <h1 className="skills__title">Compétences</h1>

    <div className="skills__all">

      <div className="skills__detail">
        <h2 className="skills__detail__h2">Développeur</h2>
        <div className="skills__details__logo_display">
          <ul className="skills__details__ul">
            <li className="skills__details__li_logo"><img className="formation__details__dev_logo" src={htmllogo} alt="html5 logo" /></li>
            <li className="skills__details__li_logo"><img className="formation__details__dev_logo" src={csslogo} alt="css3 logo" /></li>
            <li className="skills__details__li_logo"><img className="formation__details__dev_logo" src={reactlogo} alt="react logo" /></li>
            <li className="skills__details__li_logo"><img className="formation__details__dev_logo" src={reduxlogo} alt="redux logo" /></li>
            <li className="skills__details__li_logo"><img className="formation__details__dev_logo" src={jslogo} alt="javascript logo" /></li>
            <li className="skills__details__li_logo"><img className="formation__details__dev_logo" src={nodelogo} alt="nodejs logo" /></li>
            <li className="skills__details__li_logo"><img className="formation__details__dev_logo" src={postlogo} alt="postgres logo" /></li>
            <li className="skills__details__li_logo"><img className="formation__details__dev_logo" src={ejslogo} alt="ejs logo" /></li>
            <li className="skills__details__li_logo"><img className="formation__details__dev_logo" src={expresslogo} alt="express logo" /></li>
            <li className="skills__details__li_logo"><img className="formation__details__dev_logo" src={gitlogo} alt="github logo" /></li>
          </ul>
        </div>
      </div>

      <div className="skills__detail__transition" />

      <div className="skills__detail">
        <h2 className="skills__detail__h2">Montage audiovisuel</h2>
        <ul className="skills__detail_ul">
          <li className="skills__detail__li"><img className="formation__details__dev_logo" src={prlogo} alt="Adobe Premiere Pro logo" /></li>
          <li className="skills__detail__li"><img className="formation__details__dev_logo" src={pslogo} alt="Adobe PhotoShop logo" /></li>
          <li className="skills__detail__li"><img className="formation__details__dev_logo" src={aelogo} alt="After Effect logo" /></li>
          <li className="skills__detail__li"><img className="formation__details__dev_logo" src={avidlogo} alt="Avid logo" /></li>
          <li className="skills__detail__li"><img className="formation__details__dev_logo" src={fcplogo} alt="FCP 7 logo" /></li>
          <li className="skills__detail__li"><img className="formation__details__dev_logo" src={melogo} alt="Media Encoder logo" /></li>
          <li className="skills__detail__li"><img className="formation__details__dev_logo" src={shutterlogo} alt="Shutter Encoder logo" /></li>
        </ul>"
      </div>

      <div className="skills__detail__transition" />

      <div className="skills__detail">
        <h2 className="skills__detail__h2">Bureautique</h2>
        <ul className="skills__detail__ul">
          <li className="skills__detail__li"><img className="formation__details__dev_logo" src={wordlogo} alt="Microsoft Word logo" /></li>
          <li className="skills__detail__li"><img className="formation__details__dev_logo" src={excellogo} alt="Microsoft Excel logo" /></li>
          <li className="skills__detail__li"><img className="formation__details__dev_logo" src={gdoclogo} alt="Google doc sheet logo" />/</li>
          <li className="skills__detail__li"><img className="formation__details__dev_logo" src={sflogo} alt="SalesForce logo" /></li>
        </ul>
      </div>

      <div className="skills__detail__transition" />

      <div className="skills__detail">
        <h2 className="skills__detail__h2">Langue</h2>
        <ul className="skills__detail__ul">
          <li className="skills__detail__li"><img className="formation__details__dev_logo" src={englogo} alt="English flag logo" /></li>
          <li className="skills__detail__li"><img className="formation__details__dev_logo" src={frlogo} alt="French flag logo" /></li>
        </ul>
      </div>

      <div className="skills__detail__transition" />

      <div className="skills__detail">
        <h2 className="skills__detail__h2">Divers</h2>
        <ul className="skills__detail__ul">
          <li className="skills__detail__li">Auteur du mémoire "La Place du Monteur dans l'eSport" en 2013.</li>
          <li className="skills__detail__li">Management de guilde sur World of Warcraft depuis 14 ans (entre 15 et 30 joueurs).</li>
          <li className="skills__detail__li">Bénévole sur tout contenu vidéo (clips, émissions,enseignement...)./</li>
          <li className="skills__detail__li">Backpack trip.</li>

        </ul>
      </div>
    </div>
  </div>
);

export default Skills;

Skills.propTypes = {
  refSkills: PropTypes.object.isRequired,
};
