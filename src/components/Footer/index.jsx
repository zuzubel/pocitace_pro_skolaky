import React from 'react';
import './style.css';

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__Czechitas">
          Czechitas Digitální akademie 2020
        </div>
        <a
          className="footer__email"
          href="mailto: pocitaceproskolaky@gmail.com"
        >
          Máte otázky? Napište nám!
        </a>
      </div>
    </>
  );
};
