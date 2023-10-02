// import PropTypes from 'prop-types';
import css from './Contact.module.css';
import cvFile from '../Data/cv.pdf'

export const Contact = () => {
  const handleDownload = () => {
    window.open(cvFile, '_blank');
  };

  return (
    <div className={css.box} id="contact">
      <div className={css.header}>
        <h2 className={css.name}>Contact</h2>
      </div>
      <p>email: mowinska.ania@gmail.com</p>
      <button className={css.button} onClick={handleDownload}>Download CV</button>
    </div>
  );
};
