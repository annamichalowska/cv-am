// import PropTypes from 'prop-types';
import css from './Softskills.module.css';

export const Softskills = ({ softskills }) => {
  return (
    <div className={css.box}>
      <div className={css.header}>
        <h2 className={css.name}>Soft Skills</h2>
      </div>
      <div className={css.skills}>
        {softskills.map(({ softskills }) => (
          <li>{softskills}</li>
        ))}
      </div>
    </div>
  );
};
