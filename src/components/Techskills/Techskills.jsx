// import PropTypes from 'prop-types';
import React from "react";
import techskillsMainData from '../Data/techskillsMain';
import css from './Techskills.module.css';
import { IconContext } from 'react-icons';
import { TbBrandJavascript, TbBrandReact, TbBrandHtml5, TbBrandCss3 } from 'react-icons/tb';
import { FaNode } from 'react-icons/fa';

const iconComponents = {
  "js": TbBrandJavascript,
  "react": TbBrandReact,
  "html": TbBrandHtml5,
  "css": TbBrandCss3,
  "node": FaNode
};

export const Techskills = ({ techskills }) => {
  return (
    <div className={css.box}>
      <div className={css.header}>
        <h2 className={css.name}>Tech Skills</h2>
      </div>
      <div className={css.skills}>

{/* <div className={css.icons}>
<TbBrandJavascript className={css.icon}></TbBrandJavascript>
<TbBrandReact className={css.icon}></TbBrandReact>
<TbBrandHtml5 className={css.icon}></TbBrandHtml5>
<TbBrandCss3 className={css.icon}></TbBrandCss3>
<FaNode className={css.node}></FaNode>
</div> */}

      <div className={css.text}>
        {/* {techskillsMainData.map((item) => (
            <li key={item.techskillsMain}> {item.techskillsMain} </li>
        ))} */}
 {techskillsMainData.map((item) => {
            const IconComponent = iconComponents[item.iconName];
            return (
              <div key={item.techskillsMain}>
                <span>{item.techskillsMain}</span>
                {IconComponent && (
                  <IconContext.Provider value={{ className: css.icon }}>
                    <IconComponent />
                  </IconContext.Provider>
                )}
              </div>
            );
          })}

      </div>

      <div className={css.text}>
        {techskills.map(({ techskills }) => (
          <li>{techskills}</li>
        ))}
      </div>
      
      </div>
    </div>
  );
};
