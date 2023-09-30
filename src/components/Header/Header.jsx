// import PropTypes from 'prop-types';

import css from './Header.module.css';
import photo from '../Image/am.jpg';
import arrow from '../Image/arrow.gif';
import React, { useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
    setActiveSection(id);
  
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 64,
        behavior: "smooth",
      });
    }
  };

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
      <div className={css.footer}>
        <p className={css.text}>Get to know me better</p>
        <img src={arrow} alt="arrow" className={css.arrow}></img>
        <div className={css['button-box']}>
        {['projects', 'skills', 'contact'].map((button) => (
          <button className={`${css.button} ${activeSection === button ? css.link : ""}`}
      key={`link-${button}`}>
            <div />
            <a href={`#${button}`} className={css.link} onClick={(e) => { e.preventDefault();
            scrollToSection(button);}}>{button}</a>
          </button>
        ))}
        </div>
      </div>
    </div>
  );
};
