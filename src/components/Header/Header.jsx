// import PropTypes from 'prop-types';
import css from './Header.module.css';
import photo from '../Image/am.jpg';

export const Header = () => {
  return (
    <div className={css.box}>
      <div className={css['photo-box']}>
        <img src={photo} alt="annamichalowska" className={css.photo} />
      </div>
      <div className={css.header}>
        <h1 className={css.title}>Anna Mówińska</h1>
        <h3 className={css.profession}>JUNIOR FRONT-END DEVELOPER</h3>
        <p className={css.description}>
          I’m a Junior Front-End developer. I focus on HTML5, CSS3, JS, React.
          English - Intermediate. Looking for a remote job. Development,
          practice and work for the result are important for me. I intend to
          develop innovative technologies and deliver value to people.
        </p>
      </div>
    </div>
  );
};
