import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';

render(
  <>
    <header>
      <div className="header__container">
        <div className="header__left">
          <div className="header__logo"></div>
        </div>
        <div className="header__right">
          <a href="#">O projektu</a>
          <a href="#">Chci darovat</a>
          <a href="#">Potřebuji počítač</a>
        </div>
      </div>
    </header>
    <main>
      <p>Moje první React stránka</p>
    </main>
    <footer>Martin Podloucký</footer>
  </>,
  document.querySelector('#app'),
);
