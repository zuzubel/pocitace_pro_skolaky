import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  const [burger, setBurger] = useState(false);
  const handleClick = () => setBurger(false);

  return (
    <header>
      <div className="header__container">
        <div className="header__left">
          <Link to="/home">
            <div className="header__logo"></div>
          </Link>
        </div>
        <div className="header__right">
          <button
            id="nav-btn"
            className="nav-btn"
            onClick={() => setBurger(!burger)}
          ></button>
          <nav className={burger ? 'nav-column' : 'nav-row'}>
            <Link to="/home">Úvod</Link>
            <Link
              className="nav__link"
              to="/about_project"
              onClick={handleClick}
            >
              O projektu
            </Link>
            <Link className="nav__link" to="" onClick={handleClick}>
              Chci darovat
            </Link>
            <Link className="nav__link" to="/form" onClick={handleClick}>
              Potřebuji počítač
            </Link>
            <Link className="nav__link" to="" onClick={handleClick}>
              Kontakt
            </Link>
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
