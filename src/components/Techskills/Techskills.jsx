// import PropTypes from 'prop-types';
import css from './Techskills.module.css';

export const Techskills = ({ techskills }) => {
  return (
    <div className={css.box}>
      <div className={css.header}>
        <h2 className={css.name}>Tech Skills</h2>
      </div>

      <div className={css.skills}>
        {techskills.map(({ techskills }) => (
          <li>{techskills}</li>
        ))}
      </div>
    </div>
  );
};
