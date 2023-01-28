import React from 'react';
import ReactDOM from 'react-dom/client';

// import { App } from 'components/App';
import { Header } from 'components/Header/Header';
import { Projects } from 'components/Projects/Projects';

import projects from 'components/Data/projects.json';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Projects projects={projects} />
  </React.StrictMode>
);
