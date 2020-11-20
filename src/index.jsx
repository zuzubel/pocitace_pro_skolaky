import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import { Header } from './components/Header/index.jsx';
import { For } from './components/For/index.jsx';
import { AboutProject } from './components/AboutProject';
import { HowItWorks } from './components/HowItWorks/index.jsx';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <For />
        <AboutProject />
        <HowItWorks />
      </main>
      <footer>Czechitas</footer>
    </>
  );
};

render(<App />, document.querySelector('#app'));
