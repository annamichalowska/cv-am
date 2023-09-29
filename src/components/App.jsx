import css from './App.module.css';

import { Navbar } from 'components/Navbar/Navbar';
import { Header } from 'components/Header/Header';
import { Projects } from 'components/Projects/Projects';
import { Techskills } from 'components/Techskills/Techskills';
import { Softskills } from 'components/Softskills/Softskills';
import { Contact } from 'components/Contact/Contact';

import projects from 'components/Data/projects.json';
import techskills from 'components/Data/techskills.json';
import softskills from 'components/Data/softskills.json';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects projects={projects} />
      <div className={css.box}>
        <Techskills className={css.items} techskills={techskills} />
        <Softskills className={css.items} softskills={softskills} />
        </div>
      <Contact />
    </div>
  );
};
