import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const AboutProject = () => {
  return (
    <>
      <div id="AboutProject" className="aboutProject">
        <div className="aboutProject--text">
          <p className="aboutProject--h">O projektu</p>
          <p className="aboutProject--p">
            Pandemie koronaviru přenusula studium do online prostředí. Mnoho
            žáků a studentů ale nemá vyhovující podmínky a každým dnem jim tak
            utíká část výuky. Tuto zrátu budou po návratu do škol stěží dohánět.
            Pojďme společně pomoci! Dostaňme nepotřebnou IT techniku ke
            studentům, kteří ji potřebují.
          </p>
          <div className="aboutProject__buttons">
            <Link to="/donate">
              <button className="aboutProject__btn btn__donate">
                Chci pomoci
              </button>
            </Link>
            <Link to="/form">
              <button className="aboutProject__btn btn__form">
                Potřebuji počítač
              </button>
            </Link>
          </div>
        </div>
        <div className="aboutProject--foto"></div>
      </div>
    </>
  );
};
