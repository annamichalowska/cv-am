// import PropTypes from 'prop-types';
import css from './Softskills.module.css';
import softskillsData from '../Data/softskills';
import { IconContext } from 'react-icons';
import { BsPersonWorkspace, BsFillAwardFill } from 'react-icons/bs'
import { AiOutlineComment, AiOutlineFieldTime } from 'react-icons/ai'
import { RiTeamFill } from 'react-icons/ri'

const iconComponents = {
  BsPersonWorkspace: BsPersonWorkspace,
  BsFillAwardFill: BsFillAwardFill,
  AiOutlineComment: AiOutlineComment,
  RiTeamFill: RiTeamFill,
  AiOutlineFieldTime: AiOutlineFieldTime
};

export const Softskills = ({ softskills }) => {
  return (
    <div className={css.box}>
      <div className={css.header}>
        <h2 className={css.name}>Soft Skills</h2>
      </div>
      <div className={css.skills}>
        {softskillsData.map(item => {
          const IconComponent = iconComponents[item.icon];
          return (
            <div className={css.softskills} key={item.softskills}>
              <IconContext.Provider value={{ className: css.icon }}>
                {IconComponent && <IconComponent />}
              </IconContext.Provider>
              <span className={css.text}>{item.softskills}</span>
            </div>
          );
        })}
        </div>
    </div>
  );
};
