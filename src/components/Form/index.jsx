import React, { useEffect, useState } from 'react';
import { db } from '../../db.js';

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
    db.collection('chci_pocitac').onSnapshot((query) => {
      setPolozky(query.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <h1>Formulář</h1>

      <form
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
          });
        }}
      >
        <label>
          Název školy:
          <input
            value={skola}
            onChange={(event) => setSkola(event.target.value)}
          />
        </label>
        <label>
          Adresa:
          <input
            value={skolaAdresa}
            onChange={(event) => setSkolaAdresa(event.target.value)}
          />
        </label>

        <label>
          Kontaktní osoba:
          <input
            value={kontakt}
            onChange={(event) => setKontakt(event.target.value)}
          />
        </label>
        <label>
          E-mail:
          <input
            value={kontaktEmail}
            onChange={(event) => setKontaktEmail(event.target.value)}
          />
        </label>
        <label>
          Telefon:
          <input
            value={kontaktTelefon}
            onChange={(event) => setKontaktTelefon(event.target.value)}
          />
        </label>
        <label>
          Co potřebuji:
          <input
            value={poptavka}
            onChange={(event) => setPoptavka(event.target.value)}
          />
        </label>
        <label>
          Doplňující informace:
          <input
            value={info}
            onChange={(event) => setInfo(event.target.value)}
          />
        </label>
        <button>Přidat poptávku</button>
      </form>
      <h2>Co nám formulář vypisuje: </h2>
      <ul>
        {polozky.map((polozka, i) => (
          <li key={i}>
            {
              (polozka.skola,
              polozka.skolaAdresa,
              polozka.kontakt,
              polozka.kontaktEmail,
              polozka.kontaktTelefon,
              polozka.poptavka,
              polozka.info)
            }
          </li>
        ))}
      </ul>
    </>
  );
};
