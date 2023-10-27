import css from './App.module.css';
import { Navbar } from 'components/Navbar/Navbar';
import { Home } from 'components/Home/Home';
import { About } from 'components/About/About';
import { Projects } from 'components/Projects/Projects';
import { Techskills } from 'components/Techskills/Techskills';
import { Softskills } from 'components/Softskills/Softskills';
import { Contact } from 'components/Contact/Contact';
import { Arrow } from 'components/Arrow/Arrow';
import projects from 'components/Data/projects.json';
import techskills from 'components/Data/techskills.json';
import softskills from 'components/Data/softskills.json';


export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects projects={projects} />
      <div className={css.box}>
        <Techskills className={css.items} techskills={techskills} />
        <Softskills className={css.items} softskills={softskills} />
      </div>
      <Contact />
      <Arrow />
    </div>
  );
};
