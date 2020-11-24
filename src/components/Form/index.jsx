import React, { useEffect, useState } from 'react';
import './style.css';
import { db } from '../../db.js';
import firebase from 'firebase/app';

export const Form = () => {
  const [polozky, setPolozky] = useState([]);
  const [skola, setSkola] = useState('');
  const [skolaAdresa, setSkolaAdresa] = useState('');
  const [kontakt, setKontakt] = useState('');
  const [kontaktEmail, setKontaktEmail] = useState('');
  const [kontaktTelefon, setKontaktTelefon] = useState('');
  const [poptavka, setPoptavka] = useState('');
  const [info, setInfo] = useState('');

  useEffect(() => {
    return db
      .collection('chci_pocitac')
      .orderBy('datumVytvoreni')
      .onSnapshot((querySnapshot) => {
        setPolozky(
          querySnapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );
      });
  }, []);

  return (
    <>
      <section className="form_sec">
        <div className="form_div">
          <h1 className="form_headline">Formulář</h1>
          <ul>
            {polozky.map((polozka) => (
              <>
                <li key={polozka.id}>
                  <input
                    type="checkbox"
                    checked={polozka.vyrizeno}
                    onChange={(event) => {
                      db.collection('chci_pocitac').doc(polozka.id).update({
                        vyrizeno: event.target.checked,
                      });
                    }}
                  />
                  <button
                    onClick={() => {
                      db.collection('chci_pocitac').doc(polozka.id).delete();
                    }}
                  >
                    SMAZAT INZERÁT
                  </button>
                </li>
                <li>{polozka.skola}</li>
                <li>{polozka.skola_adresa}</li>
                <li>{polozka.poptavam}</li>
                <li>{polozka.info}</li>
                <li>{polozka.kontakt_email}</li>
                <li>{polozka.kontakt_telefon}</li>
              </>
            ))}
          </ul>

          <form
            className="form"
            onSubmit={(event) => {
              event.preventDefault();
              db.collection('chci_pocitac').add({
                skola: skola,
                skola_adresa: skolaAdresa,
                kontaktni_osoba: kontakt,
                kontakt_email: kontaktEmail,
                kontakt_telefon: kontaktTelefon,
                poptavam: poptavka,
                info: info,
                vyrizeno: false,
                datumVytvoreni: firebase.firestore.FieldValue.serverTimestamp(),
              });
              setSkola(''),
                setSkolaAdresa(''),
                setKontakt(''),
                setKontaktEmail(''),
                setKontaktTelefon(''),
                setPoptavka(''),
                setInfo('');
            }}
          >
            <div className="form__fields">
              <div className="form__inputs">
                <div className="row">
                  <label>
                    <input
                      type="text"
                      placeholder="Název školy"
                      value={skola}
                      onChange={(event) => setSkola(event.target.value)}
                    />
                  </label>
                </div>
                <div className="row">
                  <label>
                    <input
                      type="text"
                      placeholder="Adresa"
                      value={skolaAdresa}
                      onChange={(event) => setSkolaAdresa(event.target.value)}
                    />
                  </label>
                </div>
                <div className="row">
                  <label>
                    <input
                      type="text"
                      placeholder="Kontaktní osoba"
                      value={kontakt}
                      onChange={(event) => setKontakt(event.target.value)}
                    />
                  </label>
                </div>
                <div className="row">
                  <label>
                    <input
                      type="email"
                      placeholder="E-mail"
                      value={kontaktEmail}
                      onChange={(event) => setKontaktEmail(event.target.value)}
                    />
                  </label>
                </div>
                <div className="row">
                  <label>
                    <input
                      type="tel"
                      placeholder="Telefon"
                      value={kontaktTelefon}
                      onChange={(event) =>
                        setKontaktTelefon(event.target.value)
                      }
                    />
                  </label>
                </div>
                <div className="row">
                  <label>
                    <input
                      type="text"
                      placeholder="Poptávám..."
                      value={poptavka}
                      onChange={(event) => setPoptavka(event.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="form__textarea">
                <div className="row">
                  <label>
                    <textarea
                      type="text"
                      placeholder="Dejte nám dopňující informace a zvyšte tak šanci, že právě vaše přání bude vyslyšeno."
                      value={info}
                      onChange={(event) => setInfo(event.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>
            <button className="btn">Přidat poptávku</button>
          </form>
        </div>
      </section>
    </>
  );
};

//doplňující informace: udělat větší okénko
//telefon: nastavit jako číslo
//přidat povinné položky
