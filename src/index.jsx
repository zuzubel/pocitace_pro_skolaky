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
          <a href="#">Kontakt</a>
        </div>
      </div>
      <div className="opening">
        <p className="opening__par1">Počítače pro školáky</p>
        <p className="opening__par2">
          Nedarujete jen počítač, darujete vzdělání!
        </p>
      </div>
    </header>
    <main>
      <div className="for"></div>
      <div className="for__donors"></div>
      <div className="for__schools"></div>
    </main>
    <footer>Czechitas</footer>
  </>,
  document.querySelector('#app'),
);
