import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const HowItWorks = () => {
  return (
    <section className="howItWorks__container">
      <div className="howItWorks__wrapper">
        <div className="donate__container">
          <h3 className="donate__h">Jak mohu darovat počítač?</h3>
          <div className="donate__steps">
            <div className="donate__step">
              <Link to="/donate" className="donate__step1-img"></Link>
              <Link to="/donate" className="howItWorks__link">
                <p className="donate__p--link">Vyberete si instituci</p>
              </Link>
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
              <Link to="/form" className="apply__step1-img"></Link>
              <Link to="/form" className="howItWorks__link">
                <p className="apply__p--link">Vyplňte formulář</p>
              </Link>
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
      </div>
    </section>
  );
};
