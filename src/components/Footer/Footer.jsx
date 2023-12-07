// import PropTypes from 'prop-types';
import css from './Footer.module.css';
import photo from '../Image/logo.png'
import { BiLogoSpotify, BiLogoFacebookCircle, BiLogoInstagramAlt } from 'react-icons/bi';
import { BsWhatsapp, BsYoutube } from 'react-icons/bs';

export const Footer = ({ media }) => {

  return (
    <div className={css.footer}>
    <img src={photo} alt="logo" className={css.logo} />
    <div className={css['mobile-block']}>
    <div className={css['footer-icon']}>
        <a href={"https://wa.me/663607685"} className={css['icon-block']} target="_blank" rel="noreferrer">
        <BsWhatsapp className={css['icon-media']}></BsWhatsapp>
      </a>
      <a href={"https://open.spotify.com/user/pieczara89?si=e29f169a094e4366"} className={css['icon-block']} target="_blank" rel="noreferrer">
        <BiLogoSpotify className={css['icon-media']}></BiLogoSpotify>
      </a>
      <a href={"https://www.facebook.com/aneczka.michalowska"} className={css['icon-block']} target="_blank" rel="noreferrer">
        <BiLogoFacebookCircle className={css['icon-media']}></BiLogoFacebookCircle>
      </a>
      <a href={"https://www.instagram.com/aneczkamichalowska/"} className={css['icon-block']} target="_blank" rel="noreferrer">
        <BiLogoInstagramAlt className={css['icon-media']}></BiLogoInstagramAlt>
      </a>
      <a href={"https://www.youtube.com/channel/UC2sgNBSuDfwCIkimCymFJCQ"} className={css['icon-block']} target="_blank" rel="noreferrer">
        <BsYoutube className={css['icon-media']}></BsYoutube>
      </a>
    </div>  
    <p className={css.reserved}> <span className={css.company}>Anna Mówińska </span>2023 <span className={css.sign}>©</span> All Rights Reserved</p>
    </div>
  </div>
  );
};
