import './styles.scss';
import PropTypes from 'prop-types';

// Import logo

import reactlogo from '../../../public/img/ico_resize/react.ico';
import htmllogo from '../../../public/img/ico_resize/html.ico';
import csslogo from '../../../public/img/ico_resize/css.ico';
import jslogo from '../../../public/img/ico_resize/js.ico';
import reduxlogo from '../../../public/img/ico_resize/redux.ico';
import nodelogo from '../../../public/img/ico_resize/nodejs.ico';
import postlogo from '../../../public/img/ico_resize/postgresql.ico';
import ejslogo from '../../../public/img/ico_resize/ejs.ico';
import expresslogo from '../../../public/img/express.png';
import gitlogo from '../../../public/img/ico_resize/github.ico';

import aelogo from '../../../public/img/ico_resize/ae.ico';
import prlogo from '../../../public/img/ico_resize/pr.ico';
import pslogo from '../../../public/img/ico_resize/ps.ico';
import fcplogo from '../../../public/img/ico_resize/fcp.ico';
import melogo from '../../../public/img/ico_resize/me.ico';
import avidlogo from '../../../public/img/ico_resize/avid.ico';
import shutterlogo from '../../../public/img/ico_resize/shutter.ico';

import englogo from '../../../public/img/ico_resize/engflag.ico';
import frlogo from '../../../public/img/ico_resize/frflag.ico';

import wordlogo from '../../../public/img/ico_resize/word.ico';
import excellogo from '../../../public/img/ico_resize/excel.ico';
import sflogo from '../../../public/img/ico_resize/salesforce.ico';
import gdoclogo from '../../../public/img/ico_resize/gdoc.ico';

const Skills = ({ refSkills }) => (
  <div className="skills" ref={refSkills}>
    <h1 className="skills__title">Compétences</h1>

    <div className="skills__all">

      <div className="skills__detail">
        <h2 className="skills__detail__h2">Développeur</h2>
        <div className="skills__detail__logo_display">
          <ul className="skills__detail__ul">
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={htmllogo} alt="html5 logo" title="HTML 5" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={csslogo} alt="css3 logo" title="CSS 3" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={reactlogo} alt="react logo" title="React" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={reduxlogo} alt="redux logo" title="Redux" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={jslogo} alt="javascript logo" title="JavaScript" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={nodelogo} alt="nodejs logo" title="NodeJS" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={postlogo} alt="postgres logo" title="PostgreSQL" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={ejslogo} alt="ejs logo" title="EJS" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={expresslogo} alt="express logo" title="Express" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={gitlogo} alt="github logo" title="GitHub" /></li>
          </ul>
        </div>
      </div>

      <div className="skills__detail__transition" />

      <div className="skills__detail">
        <h2 className="skills__detail__h2">Montage audiovisuel</h2>
        <div className="skills__detail__logo_display">
          <ul className="skills__detail__ul">
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={prlogo} alt="Adobe Premiere Pro logo" title="Adobe Première Pro" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={pslogo} alt="Adobe PhotoShop logo" title="Adobe Photoshop" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={aelogo} alt="After Effect logo" title="After Effect" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={avidlogo} alt="Avid logo" title="Avid Media Composer" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={fcplogo} alt="FCP 7 logo" title="Final Cut Pro 7" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={melogo} alt="Media Encoder logo" title="Adobe Media Encoder" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={shutterlogo} alt="Shutter Encoder logo" title="Shutter Encoder" /></li>
          </ul>
        </div>
      </div>

      <div className="skills__detail__transition" />

      <div className="skills__detail">
        <h2 className="skills__detail__h2">Bureautique</h2>
        <div className="skills__detail__logo_display">
          <ul className="skills__detail__ul">
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={wordlogo} alt="Microsoft Word logo" title="Word" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={excellogo} alt="Microsoft Excel logo" title="Excel" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={gdoclogo} alt="Google doc sheet logo" title="Gdoc et Gsheet" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={sflogo} alt="SalesForce logo" title="SalesForce" /></li>
          </ul>
        </div>
      </div>

      <div className="skills__detail__transition" />

      <div className="skills__detail">
        <h2 className="skills__detail__h2">Langues</h2>
        <div className="skills__detail__logo_display">
          <ul className="skills__detail__ul">
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={englogo} alt="English flag logo" /></li>
            <li className="skills__detail__li_logo"><img className="skills__detail__dev__logo" src={frlogo} alt="French flag logo" /></li>
          </ul>
        </div>
      </div>

      <div className="skills__detail__transition" />

      <div className="skills__detail">
        <h2 className="skills__detail__h2">Divers</h2>
        <ul className="skills__detail__ul__divers">
          <li className="skills__detail__li">• Auteur du mémoire "<span className="bold">La Place du Monteur dans l'eSport</span>" en 2013.</li>
          <li className="skills__detail__li">• <span className="bold">Management</span> de guilde sur World of Warcraft depuis <span className="bold">14 ans</span> (entre 15 et 30 joueurs).</li>
          <li className="skills__detail__li">• Réalisateur, cadreur, monteur  bénévole sur tout contenu vidéo (clips, émissions,enseignement...)./</li>
          <li className="skills__detail__li">• Backpack trip.</li>

        </ul>
      </div>
    </div>
  </div>
);

export default Skills;

Skills.propTypes = {
  refSkills: PropTypes.object.isRequired,
};
