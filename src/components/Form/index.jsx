import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { db } from '../../db.js';
import firebase from 'firebase/app';
import { regions } from '../../config.js';
import TextareaAutosize from 'react-textarea-autosize';

export const Form = () => {
  const [school, setSchool] = useState('a');
  const [schoolAdress, setSchoolAdress] = useState('a');
  const [contact, setContact] = useState('a');
  const [contactEmail, setContactEmail] = useState('a@gmail.com');
  const [contactTelephone, setContactTelephone] = useState('123123123');
  const [request, setRequest] = useState('');
  const [info, setInfo] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [region, setRegion] = useState('');

  return (
    <>
      <div className="form__opening">
        <p className="form__opening__h">
          Víte o dítěti, které potřebuje počítač?
        </p>
        <p className="form__opening__p">
          Znáte ve svém okolí nějakého žáka nebo studenta, který se nemůže
          účastnit online výuky, protože k tomu nemá vyhovující technické
          podmínky? Zastupujete dětský domov a řešítě, že nemáte dostatek
          počítačů, abyste v aktuální situaci pokryli výuku všech vašich dětí?
          Ať už jste paní učitelka, maminka, nebo spolužák, dejte nám o tom
          vědět.
        </p>
        <p className="form__opening__f">Dejme dětem šanci studovat!</p>
      </div>
      <section className="form">
        <div className="form_div">
          <h1 className="form_headline">Formulář</h1>

          <form
            className="form_body"
            onSubmit={(event) => {
              event.preventDefault();
              db.collection('chci_pocitac').add({
                school: school,
                school_adress: schoolAdress,
                region: region,
                contact_person: contact,
                contact_email: contactEmail,
                contact_telephone: contactTelephone,
                request: request,
                info: info,
                agree: agreement,
                state: false,
                date: firebase.firestore.FieldValue.serverTimestamp(),
              });
              setSchool(''),
                setSchoolAdress(''),
                setContact(''),
                setContactEmail(''),
                setContactTelephone(''),
                setRequest(''),
                setInfo('');
              setRegion('');
              setAgreement(false);
              setSubmitted(true);
            }}
          >
            <div className="form__inputs">
              <div className="form__inputs--flex">
                <div className="row">
                  <label>
                    Název školy:{' '}
                    <input
                      type="text"
                      value={school}
                      onChange={(event) => setSchool(event.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="row">
                  <label>
                    Adresa školy:{' '}
                    <input
                      type="text"
                      value={schoolAdress}
                      onChange={(event) => setSchoolAdress(event.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="div__select">
                  <label className="form__select__label">
                    Vyberte kraj:{' '}
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="form__select"
                      required
                    >
                      {regions.map((region) => (
                        <option value={region.value}>{region.label}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="row">
                  <label>
                    Kontaktní osoba:{' '}
                    <input
                      type="text"
                      value={contact}
                      onChange={(event) => setContact(event.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="row">
                  <label>
                    E-mail:{' '}
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(event) => setContactEmail(event.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="row">
                  <label>
                    Telefon:{' '}
                    <input
                      title="Pro zadání telefonního čísla, můžete využít tyto formáty: +123 123 123 123, 00123123123, 123123123, 123 123 123"
                      type="tel"
                      pattern="[+]?[()/0-9. -]{9,}"
                      value={contactTelephone}
                      onChange={(event) =>
                        setContactTelephone(event.target.value)
                      }
                    />
                  </label>
                </div>
                <div className="row">
                  <label>
                    Poptávám:{' '}
                    <input
                      type="text"
                      placeholder="Např.: 2x počítač, 4x notebook"
                      value={request}
                      onChange={(event) => setRequest(event.target.value)}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="form__textarea">
                <div className="row">
                  <label>
                    <TextareaAutosize
                      type="text"
                      placeholder="Zde vložte dopňující informace a zvyšte tak šanci, že právě vaše přání bude vyslyšeno."
                      value={info}
                      onChange={(event) => setInfo(event.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="form__checkbox--p">
              <div className="form__checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={agreement}
                    onChange={() => {
                      setAgreement(!agreement);
                    }}
                    required
                  />{' '}
                  * Souhlasím se zveřejněním kontaktních údajů.
                </label>
              </div>
            </div>

            <button type="submit" className="btn">
              Přidat poptávku
            </button>
            {submitted ? (
              <p className="submitted__p">
                Hotovo! Vámi vložené údaje byly zpracovány ve výsledný inzerát,
                který nyní čeká v sekci{' '}
                <Link className="submitted__link" to="/donate">
                  Chci pomoci
                </Link>{' '}
                na dárce.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  );
};

//doplňující informace: udělat větší okénko
//telefon: nastavit jako číslo
//přidat povinné položky

// schvovávám, nechceme na stránce vypisovat
/*                <div>{item.contact_email}</div>
                <div>{item.contact_telephone}</div>
                
                
              
          

          {/* <ul>
            {props.items.map((item) => (
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
                      {item.poptavam}
                    </div>
                    <div className="result__items--item">
                      <label className="result__items--label">
                        Vzkaz: {''}
                      </label>
                      {item.info}
                    </div>
                  </div>
                  <div key={item.id}>
                    <input
                      type="checkbox"
                      checked={item.state}
                      onChange={(event) => {
                        db.collection('chci_pocitac').doc(item.id).update({
                          state: event.target.checked,
                        });
                      }}
                    />
                    <button
                      onClick={() => {
                        db.collection('chci_pocitac').doc(item.id).delete();
                      }}
                    >
                      SMAZAT INZERÁT
                    </button>
                  </div>
                </div>
              </>
            ))}
          </ul>*/

//doplňující informace: udělat větší okénko

// schvovávám, nechceme na stránce vypisovat
/*                <div>{item.contact_email}</div>
                <div>{item.contact_telephone}</div>*/
