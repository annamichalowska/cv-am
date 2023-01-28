// import PropTypes from 'prop-types';
import css from './Projects.module.css';
import { BsLink45Deg, BsGithub } from 'react-icons/bs';

export const Projects = ({ projects }) => {
  return (
    <div className={css.box}>
      <div className={css.header}>
        <h2 className={css.name}>Projects</h2>
      </div>
      <div className={css.projects}>
        {projects.map(
          ({ title, describe, languages, site, git, image, alt }) => (
            <figure className={css.items}>
              <div className={css.block}>
                <img src={image} alt={alt} className={css.image}></img>
                <div className={css.animation}>
                  <p className={css.describe}>{describe}</p>
                </div>
              </div>
              <figcaption className={css['title-box']}>
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
