import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import { Header } from './components/Header/index.jsx';
import { For } from './components/For/index.jsx';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <For />
      </main>
      <footer>Czechitas</footer>
    </>
  );
};

render(<App />, document.querySelector('#app'));
