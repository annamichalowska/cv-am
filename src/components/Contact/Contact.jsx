// import PropTypes from 'prop-types';
import css from './Contact.module.css';
import React, { useEffect, useState } from "react";
import photo from '../Image/cv.png';
import cvFile from '../Data/cv.pdf'
import contactData from '../Data/contact';
import { IconContext } from 'react-icons';
import { AiOutlineMail, AiOutlinePhone, AiOutlineGithub } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';


const iconComponents = {
  AiOutlineMail: AiOutlineMail,
  AiOutlinePhone: AiOutlinePhone,
  AiOutlineGithub: AiOutlineGithub,
  BiLogoLinkedin: BiLogoLinkedin,
};

export const Contact = ({ contact }) => {
  const handleDownload = () => {
    window.open(cvFile, '_blank');
  };

  const handleIconClick = (contactType) => {
    if (contactType === 'e-mail') {
      window.location.href = 'mailto:mowinska.ania@gmail.com';
    } else if (contactType === 'phone'){
      window.location.href = 'tel:+48663607685'
    } else if (contactType === 'github') {
      window.open('https://github.com/annamowinska', '_blank');
    } else if (contactType === 'linkedin') {
      window.open('https://www.linkedin.com/in/annamowinska/', '_blank')
    }
  };

  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const toggleImageSize = () => {
    setIsImageEnlarged(!isImageEnlarged);
  };

  const closeImageDialog = () => {
    setIsImageEnlarged(false);
  }

  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if(isImageEnlarged && event.key === "Escape") {
        closeImageDialog();
      }
    };
    
    window.addEventListener("keydown", handleEscKeyPress);
    
    return () => {
      window.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isImageEnlarged]);

  return (
    <div className={css.box} id="contact">
      <div className={css.header}>
        <h2 className={css.name}>Contact</h2>
      </div>
      <div className={css.container}>
      <div className={css.contact}>
        {contactData.map(item => {
          const IconComponent = iconComponents[item.icon];
          return (
            <div className={css.item} key={item.contact} onClick={() => handleIconClick(item.contact)}>
              <IconContext.Provider value={{ className: css.icon }}>
                {IconComponent && <IconComponent />}
              </IconContext.Provider>
            </div>
          );
        })}
        </div>
        <div className={css['cv-box']}>
          {isImageEnlarged && (
            <div className={css['cv-dialog']}>
          <img
            src={photo}
            alt="cv"
            className={`${css.cv} ${isImageEnlarged ? css.enlarged : ""}`}
            onClick={toggleImageSize}
          />
          <button className={css['close-button']} onClick={closeImageDialog}>
            x
          </button>
          </div>
  )}
  {!isImageEnlarged && (
            <img
              src={photo}
              alt="cv"
              className={css.cv}
              onClick={toggleImageSize}
            />
          )}
          <button className={css.button} onClick={handleDownload}>Download CV</button>
        </div>
      </div>
    </div>
  );
};
