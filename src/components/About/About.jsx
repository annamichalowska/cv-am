// import PropTypes from 'prop-types';

import css from './About.module.css';
import photo1 from '../Image/am.jpg';
import photo2 from '../Image/cert.png';
import React, { useState } from "react";

export const About = () => {
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

  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const toggleImageSize = () => {
    setIsImageEnlarged(!isImageEnlarged);
  };

  return (
    <div className={css.container} id="about">
      <div className={css.box} >
        <div className={css['photo-box']}>
          <img src={photo1} alt="annamichalowska" className={css.photo} />
        </div>
        <div className={css.header}>
          <h1 className={css.title}>Anna <span className={css.surname}>Mówińska</span></h1>
          <div className={css['profession-box']}>
            <h3 className={css.profession}>JUNIOR FRONT-END DEVELOPER</h3>
          </div>
          <p className={css.description}>
              I’m a Junior Front-End developer. I focus on HTML5, CSS3, JS, React, Node.js.
              English - Intermediate. Looking for a remote job. Development,
              practice and work for the result are important for me. I intend to
              develop innovative technologies and deliver value to people.
          </p>
          </div>
        </div>
        <div className={css.footer}>
          <div className={css.education}>
            <h1 className={css['edu-title']}>Education</h1>
            <div className={css['edu-box']}>
              <div className={css['date-box']}>
                <p className={css.date}>06.2022 - 06.2023</p>
                <p className={css.date}>10.2008 - 07.2013</p>
              </div>
              <div className={css['school-box']}>
                <p className={css.school}>IT School GoIT</p>
                <p className={css.school}>Silesian University</p>
              </div>
            </div>
            <button className={css.button}>
              <a 
                href="#contact" className={css.link} 
                onClick={(e) => {
                  e.preventDefault(); 
                  scrollToSection("contact");
                }}
              >More information in my CV</a>
            </button>
            </div>
            <img
          src={photo2}
          alt="cert"
          className={`${css.cert} ${isImageEnlarged ? css.enlarged : ""}`}
          onClick={toggleImageSize}
        />
      </div>
      </div>
  );
};
