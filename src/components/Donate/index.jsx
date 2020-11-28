import React from 'react';
import { db } from '../../db.js';
import './style.css';

export const Donate = (props) => {
  console.log(props.items);

  return (
    <div className="donate__containe">
      <div className="donate__opening">
        <p className="donate__opening__h">Dejte svému počítači druhou šanci</p>
        <p className="donate__opening__p">
          Válí se vám doma ve sklepě zánovní, ale stále funkční, počítač?
          Dostali jste od Ježíška nový notebook a marně přemýšlíte, co s tím
          starým? Nebo v práci pravidelně obnovujete IT techniku a starší
          počítače už nemají využití? Máme pro vás řešení! Vdechněte vašim
          nevyužitým počítačům druhý dech a nabídněte je dál žákům a studentům,
          kterým usnadníte jejich vzdělávání.{' '}
        </p>
        <a className="donate__opening__link" href="">
          Podívejte se, kdo shání počítač.
        </a>
      </div>
      <div className="donate__ads">
        <p className="donate__ads--p">Vyber, komu pomůžeš</p>
        {props.items.map((polozka) => (
          <>
            <div className="result">
              <div className="result__items">
                <div className="result__items--item">
                  <label className="result__items--label">
                    Název školy: {''}
                  </label>
                  {polozka.skola}
                </div>
                <div className="result__items--item">
                  <label className="result__items--label">
                    Adresa školy: {''}
                  </label>
                  {polozka.skola_adresa}
                </div>
                <div className="result__items--item">
                  <label className="result__items--label">Poptávka: {''}</label>
                  {polozka.poptavam}
                </div>
                <div className="result__items--message">
                  <label className="result__items--label">Vzkaz: {''}</label>
                  {polozka.info}
                </div>
              </div>
              <div className="result__donate">
                <button className="result__button">Chci pomoci</button>
              </div>
            </div>
            <div className="result__checkbox" key={polozka.id}>
                <button
                  className="result__checkbox--btn"
                  onClick={() => {
                    db.collection('chci_pocitac').doc(polozka.id).delete();
                  }}
                >
                  SMAZAT INZERÁT
                </button>
              </div>
          </>
        ))}
      </div>
    </div>
  );
};

/*<input
                  type="checkbox"
                  checked={polozka.vyrizeno}
                  onChange={(event) => {
                    db.collection('chci_pocitac').doc(polozka.id).update({
                      vyrizeno: event.target.checked,
                    });
                  }}
                />
                
                
                
                */
