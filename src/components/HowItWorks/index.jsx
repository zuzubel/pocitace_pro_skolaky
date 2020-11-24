import React, { useState } from 'react';
import './style.css';

export const HowItWorks = () => {
  return (
    <section className="howItWorks__container">
      <div className="donate__container">
        <h3 className="donate__h">Jak mohu darovat počítač?</h3>
        <div className="donate__steps">
          <div className="donate__step">
            <div className="donate__step1-img"></div>
            <p className="donate__p">Vyberete si instituci ZDE</p>
          </div>
          <div className="donate__step">
            <div className="donate__step2-img"></div>
            <p className="donate__p">
              Spojte se s kontaktní osobou a domluvte způsob předání
            </p>
          </div>
          <div className="donate__step">
            <div className="donate__step3-img"></div>
            <p className="donate__p">Předejte počítač</p>
          </div>
        </div>
      </div>
      <div className="apply__container">
        <h3 className="apply__h">Jak mohu získat počítač?</h3>
        <div className="appy__steps">
          <div className="apply__step">
            <div className="apply__step1-img"></div>
            <p className="apply__p">Vyplňte formulář ZDE</p>
          </div>
          <div className="apply__step">
            <div className="apply__step2-img"></div>
            <p className="apply__p">Z vložených údajů se vytvoří inzerát</p>
          </div>
          <div className="apply__step">
            <div className="apply__step3-img"></div>
            <p className="apply__p">
              Dárce Vás bude kontaktovat a domluvíte se na způsobu předání
            </p>
          </div>
          <div className="apply__step">
            <div className="apply__step4-img"></div>
            <p className="apply__p">
              Obdržíte výpočetní techniku, kterou předáte studentům
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
