import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import { Header } from './components/Header/index.jsx';
import { For } from './components/For/index.jsx';
import { AboutProject } from './components/AboutProject';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <For />
        <AboutProject />
      </main>
      <footer>Czechitas</footer>
    </>
  );
};

render(<App />, document.querySelector('#app'));
