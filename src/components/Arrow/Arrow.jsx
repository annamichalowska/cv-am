// import PropTypes from 'prop-types';
import css from './Arrow.module.css';
import React, { useState, useEffect } from "react";

export const Arrow = () => {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

    const scrollToTop = () => {
        if (scrollDirection === "up") {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        } else {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
        }
      };

      useEffect(() => {
        let lastScrollY = window.scrollY;
        function handleScroll() {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY) {
            setScrollDirection("down");
          } else if (currentScrollY < lastScrollY) {
            setScrollDirection("up");
          }
          lastScrollY = currentScrollY;
    
          if (currentScrollY > 200) {
            setShowScrollToTopButton(true);
          } else {
            setShowScrollToTopButton(false);
          }
    
          if (currentScrollY + window.innerHeight >= document.body.scrollHeight) {
            setScrollDirection("up");
          } 
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <div>
    {showScrollToTopButton && (
      <div id="scroll-to-top-button" onClick={scrollToTop} className={css.scroll}>
        <span className={css.arrow}>
          {scrollDirection === "up" ? "↑" : "↓"}
        </span>
      </div>
    )}
  </div>
);
};