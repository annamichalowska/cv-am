// import PropTypes from 'prop-types';
import css from './Contact.module.css';
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

  return (
    <div className={css.box} id="contact">
      <div className={css.header}>
        <h2 className={css.name}>Contact</h2>
      </div>
      <div className={css.contact}>
        {contactData.map(item => {
          const IconComponent = iconComponents[item.icon];
          return (
            <div className={css.item} key={item.contact}>
              <IconContext.Provider value={{ className: css.icon }}>
                {IconComponent && <IconComponent />}
              </IconContext.Provider>
            </div>
          );
        })}
        </div>
      <button className={css.button} onClick={handleDownload}>Download CV</button>
    </div>
  );
};
