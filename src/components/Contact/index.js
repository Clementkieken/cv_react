import './styles.scss';
import PropTypes from 'prop-types';

import email from '../../../public/img/email.png';
import linkedin from '../../../public/img/linkedin.png';
import github from '../../../public/img/github.ico';

const Contact = ({ refContact }) => (

  <div className="contact__main" ref={refContact}>
    <h1 className="contact__main__title">Contact</h1>

    <div className="contact__details">

      <div>
        <a href="mailto:ckieken@protonmail.com" target="_blank" rel="noreferrer">
          <img className="contact__details__email" src={email} alt="logo email" />
        </a>
        {/* <p className="contact__details__p">ckieken@protonmail.com</p> */}
      </div>

      <div>
        <a href="https://www.linkedin.com/in/clement-kieken-1504b168/" target="_blank" rel="noreferrer">
          <img className="contact__details__linkedin" src={linkedin} alt="logo linkedin" />
        </a>
      </div>

      <div>
        <a href="https://github.com/Clementkieken" target="_blank" rel="noreferrer">
          <img className="contact__details__github" src={github} alt="logo github" />
        </a>
      </div>
    </div>

  </div>
);

export default Contact;

Contact.propTypes = {
  refContact: PropTypes.object.isRequired,
};
