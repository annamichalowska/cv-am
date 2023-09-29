// import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const Contact = () => {
  return (
    <div className={css.box} id="contact">
      <div className={css.header}>
        <h2 className={css.name}>Contact</h2>
      </div>
      <p>email: mowinska.ania@gmail.com</p>
    </div>
  );
};
