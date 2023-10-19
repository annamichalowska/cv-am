// import PropTypes from 'prop-types';
import css from './Projects.module.css';
import photo1 from '../Image/icecream.png';
import photo2 from '../Image/movie.png';
import photo3 from '../Image/wallet.png';
import photo4 from '../Image/phonebook.png';
import photo5 from '../Image/search.png';
import photo6 from '../Image/webstudio.png';

import { BsLink45Deg, BsGithub } from 'react-icons/bs';

const projectImg = [photo1, photo2, photo3, photo4, photo5, photo6];

export const Projects = ({ projects }) => {
  return (
    <div className={css.box} id="projects">
      <div className={css.header}>
        <h2 className={css.name}>Projects</h2>
      </div>
      <div className={css.projects}>
        <div className={css.wrapper}>
        {projects.map(
          ({ title, describe, languages, site, git, alt }, images) => (
            <figure className={css.items} key={images}>
              <div className={css.block}>
                <img
                  src={projectImg[images]}
                  alt={alt}
                  className={css.image}
                ></img>
                <div className={css.animation}>
                  <p className={css.describe}>{describe}</p>
                </div>
              </div>
              <figcaption className={css['title-box']} key={title}>
                <h3 className={css.title}>{title}</h3>
                <p className={css.languages}>{languages}</p>
                <div className={css.link}>
                  <a href={site} target="_blank" rel="noreferrer">
                    <BsLink45Deg className={css['icon-site']}></BsLink45Deg>
                  </a>
                  <a href={git} target="_blank" rel="noreferrer">
                    <BsGithub className={css['icon-git']}></BsGithub>
                  </a>
                </div>
              </figcaption>
            </figure>
          )
        )}
        </div>
      </div>
    </div>
  );
};
