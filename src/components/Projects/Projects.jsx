// import PropTypes from 'prop-types';
import css from './Projects.module.css';
import { BsLink45Deg, BsGithub } from 'react-icons/bs';

export const Projects = ({ projects }) => {
  return (
    <div className={css.box}>
      <div>
        <h2 className={css.name}>Projects</h2>
      </div>
      <div>
        {projects.map(({ title, describe, languages, site, git }) => (
          <div>
            <h3 className={css.title}>{title}</h3>
            <p className={css.describe}>{describe}</p>
            <p className={css.languages}>{languages}</p>
            <div className={css.link}>
              <a href={site}>
                <BsLink45Deg></BsLink45Deg>
              </a>
              <a href={git}>
                <BsGithub></BsGithub>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
