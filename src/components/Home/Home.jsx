import css from './Home.module.css';
import arrow from '../Image/arrow.png';
import React, { useState } from "react";
import graphics from '../Image/knowme.png';
import logo from '../Image/logo2.png';

export const Home = () => {
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
    <div className={css.container} id="home">
      <div className={css.header}>
        <p className={css.text}>I'm <span className={css.name}>Anna Mówińska</span></p>
        <img src={logo} alt="logo" className={css.logo}></img>
        <p className={css.profession}> <span className={css.level}>Junior</span>Frontend Developer
        </p>
      </div>
      <div className={css.footer}>
        <img src={graphics} alt="knowme" className={css.graphics} ></img>
        <img src={arrow} alt="arrow" className={css.arrow}></img>
        <div className={css['button-box']}>
        {['projects', 'skills', 'contact'].map((button) => (
          <button className={`${css.button} ${css[button]} ${activeSection === button ? css.link : ""}`}
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
