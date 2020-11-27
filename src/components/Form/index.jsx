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
  const [souhlas, setSouhlas] = useState(false);

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
      <div className="form__container">
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
        <section className="form_sec">
          <div className="form_div">
            <h1 className="form_headline">Formulář</h1>

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
                  souhlas: souhlas,
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
                setSouhlas(false);
              }}
            >
              <div className="form__fields">
                <div className="form__inputs">
                  <div className="row">
                    <label>
                      Název školy:{' '}
                      <input
                        type="text"
                        value={skola}
                        onChange={(event) => setSkola(event.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div className="row">
                    <label>
                      Adresa školy:{' '}
                      <input
                        type="text"
                        value={skolaAdresa}
                        onChange={(event) => setSkolaAdresa(event.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div className="row">
                    <label>
                      Kontaktní osoba:{' '}
                      <input
                        type="text"
                        value={kontakt}
                        onChange={(event) => setKontakt(event.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div className="row">
                    <label>
                      E-mail:{' '}
                      <input
                        type="email"
                        value={kontaktEmail}
                        onChange={(event) =>
                          setKontaktEmail(event.target.value)
                        }
                        required
                      />
                    </label>
                  </div>
                  <div className="row">
                    <label>
                      Telefon:{' '}
                      <input
                        type="tel"
                        value={kontaktTelefon}
                        onChange={(event) =>
                          setKontaktTelefon(event.target.value)
                        }
                      />
                    </label>
                  </div>
                  <div className="row">
                    <label>
                      Poptávám:{' '}
                      <input
                        type="text"
                        value={poptavka}
                        onChange={(event) => setPoptavka(event.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div className="form__textarea">
                    <div className="row">
                      <label>
                        <textarea
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
                        checked={souhlas}
                        onChange={() => {
                          setSouhlas(!souhlas);
                        }}
                        required
                      />{' '}
                      * Souhlasím se zveřejněním kontaktních údajů.
                    </label>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn">
                Přidat poptávku
              </button>
            </form>
          </div>

          <ul>
            {polozky.map((polozka) => (
              <>
                <div className="result">
                  <div className="result_items">
                    <div className="item">{polozka.skola}</div>
                    <div className="item">{polozka.skola_adresa}</div>
                    <div className="item">{polozka.poptavam}</div>
                    <div className="item">{polozka.info}</div>
                  </div>
                  <div key={polozka.id}>
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
                  </div>
                </div>
              </>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

//doplňující informace: udělat větší okénko
//telefon: nastavit jako číslo
//přidat povinné položky

// schvovávám, nechceme na stránce vypisovat
/*                <div>{polozka.kontakt_email}</div>
                <div>{polozka.kontakt_telefon}</div>*/
