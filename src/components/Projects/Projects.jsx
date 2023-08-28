// import PropTypes from 'prop-types';
import css from './Projects.module.css';
import photo1 from '../Image/icecream.png';
import photo2 from '../Image/movie.png';
import photo3 from '../Image/wallet.png';

import { BsLink45Deg, BsGithub } from 'react-icons/bs';

const projectImg = [photo1, photo2, photo3];

export const Projects = ({ projects }) => {
  return (
    <div className={css.box}>
      <div className={css.header}>
        <h2 className={css.name}>Projects</h2>
      </div>
      <div className={css.projects}>
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
                  <a href={site}>
                    <BsLink45Deg className={css['icon-site']}></BsLink45Deg>
                  </a>
                  <a href={git}>
                    <BsGithub className={css['icon-git']}></BsGithub>
                  </a>
                </div>
              </figcaption>
            </figure>
          )
        )}
      </div>
    </div>
  );
};
