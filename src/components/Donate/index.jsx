import React from 'react';
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
        {props.items.map((polozka) => (
          <>
            <div>{polozka.skola}</div>
            <div>{polozka.skola_adresa}</div>
            <div>{polozka.poptavam}</div>
            <div>{polozka.info}</div>
            <div key={polozka.id}></div>
          </>
        ))}
      </div>
    </div>
  );
};
