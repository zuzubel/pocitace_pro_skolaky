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
            Pandemie koronaviru přesunula studium do online prostředí. Na jaře
            při její první vlně zůstalo podle Ministerstva školství{' '}
            <strong>10 000 dětí bez přístupu k počítači</strong> a nemohlo se
            online vzdělávání účastnit. V létě dostaly školy 1,3 mld Kč na nákup
            techniky, tyto prostředky však pokryly pouze požadavky učitelů. Na
            děti se ve valné většině případů nedostalo.
          </p>
          <p className="aboutProject--p">
            Pojďme dostat nevyužité počítače, které nám často leží doma ve
            sklepě nebo ve firemním skladu, k dětem, které je teď opravdu
            potřebují.
          </p>
          <div className="aboutProject__buttons">
            <Link to="/donate" className="btn__link">
              <button className="aboutProject__btn btn__donate">
                Chci pomoci
              </button>
            </Link>
            <Link to="/form" className="btn__link">
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
