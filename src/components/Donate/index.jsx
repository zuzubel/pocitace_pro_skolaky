import React, { useState } from 'react';
import { db } from '../../db.js';
import './style.css';
import { Link } from 'react-router-dom';
import { DonateForm } from './DonateForm/index.jsx';
import { regions } from '../../config.js';

export const Donate = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const filteredItems = props.items.filter((item) => {
    if (!selectedRegion) return true;
    return item.region === selectedRegion;
  });

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
        <div className="rd__mobile">
          <div className="div__select">
            <label className="form__select__label">
              Vyberte kraj:{' '}
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="form__select"
                required
              >
                {regions.map((region) => (
                  <option value={region.value}>{region.label}</option>
                ))}
              </select>
            </label>
          </div>

          {filteredItems.map((item) => (
            <>
              <div className="result">
                <div className="result__items">
                  <div className="result__items--item">
                    <label className="result__items--label">
                      Název školy: {''}
                    </label>
                    {item.school}
                  </div>
                  <div className="result__items--item">
                    <label className="result__items--label">
                      Adresa školy: {''}
                    </label>
                    {item.school_adress}
                  </div>
                  <div className="result__items--item">
                    <label className="result__items--label">
                      Poptávka: {''}
                    </label>
                    {item.request}
                  </div>
                  <div className="result__items--message">
                    <label className="result__items--label">Vzkaz: {''}</label>
                    {item.info}
                  </div>
                </div>
                <div className="result__donate">
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                      setSelectedContact(item.contact_email);
                    }}
                    className="result__button"
                  >
                    Chci pomoci
                  </button>
                </div>
              </div>
              <div className="result__checkbox" key={item.id}>
                <button
                  className="result__checkbox--btn"
                  onClick={() => {
                    db.collection('chci_pocitac').doc(item.id).delete();
                  }}
                >
                  SMAZAT INZERÁT
                </button>
              </div>
            </>
          ))}
        </div>
        <div className="rd__desktop">
          <>
            <div className="result">
              <table className="result__table">
                <thead className="result__table--headers">
                  <tr>
                    <th className="result__table--header">Název školy</th>
                    <th className="result__table--header">
                      Adresa školy
                      <div className="div__select">
                        <label className="form__select__label">
                          Vyberte kraj:{' '}
                          <select
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                            className="form__select"
                            required
                          >
                            {regions.map((region) => (
                              <option value={region.value}>
                                {region.label}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                    </th>
                    <th className="result__table--header">Poptávka</th>
                    <th className="result__table--header">Vzkaz</th>
                    <th className="result__table--header"></th>
                  </tr>
                </thead>
                {filteredItems.map((item) => (
                  <tbody className="result_ads">
                    <tr>
                      <td className="result__table--item">{item.school}</td>
                      <td className="result__table--item">
                        {item.school_adress}
                      </td>
                      <td className="result__table--item">{item.request}</td>
                      <td className="result__table--item">{item.info}</td>
                      <td>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            setIsModalOpen(true);
                            setSelectedContact(item.contact_email);
                          }}
                          className="result__button"
                        >
                          Chci pomoci
                        </button>
                        <div className="result__checkbox" key={item.id}>
                          <button
                            className="result__checkbox--btn"
                            onClick={() => {
                              db.collection('chci_pocitac')
                                .doc(item.id)
                                .delete();
                            }}
                          >
                            SMAZAT INZERÁT
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </>
        </div>
      </div>
      <DonateForm
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        selectedContact={selectedContact}
      />
    </div>
  );
};

/*
  {item.contact_email}

<input
                  type="checkbox"
                  checked={item.state}
                  onChange={(event) => {
                    db.collection('chci_pocitac').doc(item.id).update({
                      state: event.target.checked,
                    });
                  }}
                />
                
                <div className="result__checkbox" key={item.id}>
                <button
                  className="result__checkbox--btn"
                  onClick={() => {
                    db.collection('chci_pocitac').doc(item.id).delete();
                  }}
                >
                  SMAZAT INZERÁT
                </button>
              </div>
                

                */
