// import PropTypes from 'prop-types';

import css from './About.module.css';
import photo from '../Image/am.jpg';

export const About = () => {

  return (

    <div className={css.container} id="about">
      <div className={css.box} >
        <div className={css['photo-box']}>
          <img src={photo} alt="annamichalowska" className={css.photo} />
        </div>
        <div className={css.header}>
          <h1 className={css.title}>Anna <span className={css.surname}>Mówińska</span></h1>
          <div className={css['profession-box']}><h3 className={css.profession}>JUNIOR FRONT-END DEVELOPER</h3></div>
          <p className={css.description}>
            I’m a Junior Front-End developer. I focus on HTML5, CSS3, JS, React, Node.js.
            English - Intermediate. Looking for a remote job. Development,
            practice and work for the result are important for me. I intend to
            develop innovative technologies and deliver value to people.
          </p>
        </div>
      </div>
    </div>
    
  );
};
