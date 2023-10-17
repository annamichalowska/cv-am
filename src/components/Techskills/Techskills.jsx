// import PropTypes from 'prop-types';
import React from 'react';
import techskillsMainData from '../Data/techskillsMain';
import techskillsData from '../Data/techskills';
import css from './Techskills.module.css';
import { IconContext } from 'react-icons';
import {
  TbBrandJavascript,
  TbBrandReact,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandGithubFilled,
} from 'react-icons/tb';
import { FaNode } from 'react-icons/fa';
import { SiSass, SiStyledcomponents, SiFigma, SiSwagger, SiMongodb, SiPostman } from 'react-icons/si';
import { BsFiletypeScss } from 'react-icons/bs';
import {  DiResponsive, DiGit } from 'react-icons/di';

const iconComponents = {
  TbBrandJavascript: TbBrandJavascript,
  TbBrandReact: TbBrandReact,
  TbBrandHtml5: TbBrandHtml5,
  TbBrandCss3: TbBrandCss3,
  FaNode: FaNode,
  DiGit: DiGit,
  TbBrandGithubFilled: TbBrandGithubFilled,
  SiSass: SiSass,
  BsFiletypeScss: BsFiletypeScss,
  SiStyledcomponents: SiStyledcomponents,
  SiFigma: SiFigma,
  SiSwagger: SiSwagger,
  SiMongodb: SiMongodb,
  SiPostman: SiPostman,
  DiResponsive: DiResponsive
};

export const Techskills = ({ techskills }) => {
  return (
    <div className={css.box} id="skills">
      <div className={css.header}>
        <h2 className={css.name}>Tech Skills</h2>
      </div>
      <div className={css.skillsmain}>
        {techskillsMainData.map(item => {
          const IconComponent = iconComponents[item.icon];
          return (
            <div className={css.maintechskills} key={item.techskillsMain}>
              <IconContext.Provider value={{ className: css.mainicon }}>
                {IconComponent && <IconComponent />}
              </IconContext.Provider>
              <span className={css.maintext}>{item.techskillsMain}</span>
            </div>
          );
        })}
        </div>
        <div className={css.skills}>
        {techskillsData.map(item => {
          const IconComponent = iconComponents[item.icon];
          return (
            <div className={css.maintechskills} key={item.techskills}>
              <IconContext.Provider value={{ className: css.resticon }}>
                {IconComponent && <IconComponent />}
              </IconContext.Provider>
              <span className={css.text}>{item.techskills}</span>
            </div>
          );
        })}
        </div>
    </div>
  );
};
