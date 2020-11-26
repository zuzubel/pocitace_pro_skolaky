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
      <div className="form__opening">
        <p className="form__opening__h">Víte o dítěti, které potřebuje počítač?</p>
        <p className="form__opening__p">
          Jani tady přichází ke slovu tvoje schopnost promlouvat k veřejnosti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem odit
          impedit alias quaerat ratione eveniet, ipsam cupiditate, quam nam,
          voluptas exercitationem! Maxime ex at magnam eaque cumque ducimus
          molestiae hic libero ullam facere sit, consequatur modi veritatis.
        </p>
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
                    <input
                      type="text"
                      placeholder="* Název školy"
                      value={skola}
                      onChange={(event) => setSkola(event.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="row">
                  <label>
                    <input
                      type="text"
                      placeholder="* Adresa školy"
                      value={skolaAdresa}
                      onChange={(event) => setSkolaAdresa(event.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="row">
                  <label>
                    <input
                      type="text"
                      placeholder="* Kontaktní osoba"
                      value={kontakt}
                      onChange={(event) => setKontakt(event.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="row">
                  <label>
                    <input
                      type="email"
                      placeholder="* E-mail"
                      value={kontaktEmail}
                      onChange={(event) => setKontaktEmail(event.target.value)}
                      required
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
                      placeholder="* Poptávám..."
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
            <p className="form__p">Pole označená * jsou povinná.</p>
            <button type="submit" className="btn">
              Přidat poptávku
            </button>
          </form>

          <ul>
            {polozky.map((polozka) => (
              <>
                <div>{polozka.skola}</div>
                <div>{polozka.skola_adresa}</div>
                <div>{polozka.poptavam}</div>
                <div>{polozka.info}</div>
                <div key={polozka.id}>
                  <input
                    type="text"
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
              </>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

//doplňující informace: udělat větší okénko
//telefon: nastavit jako číslo
//přidat povinné položky

// schvovávám, nechceme na stránce vypisovat
/*                <div>{polozka.kontakt_email}</div>
                <div>{polozka.kontakt_telefon}</div>*/
