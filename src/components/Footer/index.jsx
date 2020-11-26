import React from 'react';
import './style.css';

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__Czechitas">
          Czechitas Digitální akademie 2020
        </div>
        <div className="footer__logo">Počítače pro školáky</div>
        <a className="footer__email" href="pocitaceproskolaky@gmail.com">
          Máte otázky? Napište nám!
        </a>
      </div>
    </>
  );
};
