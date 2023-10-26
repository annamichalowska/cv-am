// import PropTypes from 'prop-types';
import css from './Navbar.module.css';
import logo from '../Image/logo.png';
import React, { useState, useEffect } from "react";

export const Navbar = () => {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 200) {
          setShowScrollToTopButton(true);
        } else {
          setShowScrollToTopButton(false);
        }
      }
  
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

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

      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];

      return (
        <nav className={isMobile ? css.mobileNavbar : navbarClassName}>
          {isMobile && !isMobileMenuOpen && (
        <div className={css.navbar}>
           <div className={css['date-box']}>
            <p className={css.date}>{formattedDate}</p>
            </div>
            <img src={logo} alt="logo" className={css.logo} ></img>
            <div className={css.mobileMenuIcon} onClick={toggleMobileMenu}>
              <div className={css.bar}></div>
              <div className={css.bar}></div>
              <div className={css.bar}></div>
            </div>
          </div>
          )}
          {isMobileMenuOpen && isMobile && (
            <div className={css.mobileMenuList}>
              <div className={css.closeIcon} onClick={toggleMobileMenu}>
                <span className={css.closeBar}>x</span>
              </div>
              <img src={logo} alt="logo" className={css['logo-menu']} ></img>
              <ul className={css.mobileMenuLinks}>
                {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                  <li className={css.mobileMenuItem} key={`mobile-link-${item}`}>
                    <a
                      href={`#${item}`}
                      className={css.mobileMenuLink}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item);
                        toggleMobileMenu();
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!isMobile && (
            <ul className={css.list}>
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <li className={css.item} key={`link-${item}`}>
                  <div />
                  <a href={`#${item}`} className={css.link} onClick={(e) => { e.preventDefault(); scrollToSection(item); }}>{item}</a>
                </li>
              ))}
            </ul>
          )}
          {showScrollToTopButton && (
        <div id="scroll-to-top-button" onClick={scrollToTop} className={css.scroll}>
          <span className={css.arrow}>↑</span>
        </div>
      )}
        </nav>
      );
    };