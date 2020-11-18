import React, { useState } from 'react';
import './style.css';

export const Header = () => {
  const [burger, setBurger] = useState(false);

  const handleClick = () => setBurger(!burger);

  return (
    <header>
      <div className="header__container">
        <div className="header__left">
          <div className="header__logo"></div>
        </div>
        <div className="header__right">
          <button
            id="nav-btn"
            className="nav-btn"
            onClick={() => setBurger(!burger)}
          ></button>
          <nav className={burger ? 'nav-column' : 'nav-row'}>
            <a className="nav__a"href="#" onClick={handleClick}>
              O projektu
            </a>
            <a className="nav__a"href="#" onClick={handleClick}>
              Chci darovat
            </a>
            <a className="nav__a"href="#" onClick={handleClick}>
              Potřebuji počítač
            </a>
            <a className="nav__a"href="#" onClick={handleClick}>
              Kontakt
            </a>
          </nav>
        </div>
      </div>
      <h1 className="opening">
        <p className="opening__projectName">
          Počítače pro školáky. <em>Nedarujete jen</em>
        </p>
        <p className="opening__projectSlogan">
          <em>počítač, darujete vzdělání.</em>
        </p>
      </h1>
    </header>
  );
};
