// import PropTypes from 'prop-types';
import css from './Navbar.module.css';
import React, { useState, useEffect } from "react";

export const Navbar = () => {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    
    const isMobile = windowWidth <= 767;

    const navbarClassName = isNavbarFixed ? `${css.box} ${css.fixed}` : css.box;

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          window.scrollTo({
            top: 20,
            behavior: "smooth",
          });
          setTimeout(() => {
            window.scrollTo({
              top: section.offsetTop - 64,
              behavior: "smooth",
            });
          }, 0);
        }
      };

  return (
    <nav className={isMobile ? css.hidden : navbarClassName}>
        <ul className={css.list}>
        {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <li className={css.item} key={`link-${item}`}>
            <div />
            <a href={`#${item}`} className={css.link} onClick={(e) => { e.preventDefault();
            scrollToSection(item);}}>{item}</a>
          </li>
        ))}
        </ul>
      </nav>
  );
};