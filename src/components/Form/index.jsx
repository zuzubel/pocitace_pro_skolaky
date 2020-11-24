import React, { useEffect, useState } from 'react';
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

  /*
  {polozky.map((polozka) => (
    <li key={polozka.id}>
      <input
        type="checkbox"
        checked={polozka.koupeno}
        onChange={(event) => {
          databaze.collection('seznam').doc(polozka.id).update({
            koupeno: event.target.checked,
          })
        }}
      />
      {polozka.nazev}{' '}
      <button
        onClick={() => {
          databaze.collection('seznam').doc(polozka.id).delete()
        }}
      >
        smazat
      </button>
    </li>
  ))}
</ul>
*/

  return (
    <>
      <h1>Formulář</h1>
      <h2>Co nám formulář vypisuje: </h2>
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
        <label>
          Název školy:{' '}
          <input
            value={skola}
            onChange={(event) => setSkola(event.target.value)}
          />
        </label>
        <label>
          Adresa:{' '}
          <input
            value={skolaAdresa}
            onChange={(event) => setSkolaAdresa(event.target.value)}
          />
        </label>

        <label>
          Kontaktní osoba:{' '}
          <input
            value={kontakt}
            onChange={(event) => setKontakt(event.target.value)}
          />
        </label>
        <label>
          E-mail:{' '}
          <input
            value={kontaktEmail}
            onChange={(event) => setKontaktEmail(event.target.value)}
          />
        </label>
        <label>
          Telefon:{' '}
          <input
            value={kontaktTelefon}
            onChange={(event) => setKontaktTelefon(event.target.value)}
          />
        </label>
        <label>
          Co potřebuji:{' '}
          <input
            value={poptavka}
            onChange={(event) => setPoptavka(event.target.value)}
          />
        </label>
        <label>
          Doplňující informace:{' '}
          <input
            value={info}
            onChange={(event) => setInfo(event.target.value)}
          />
        </label>
        <button>Přidat poptávku</button>
      </form>
    </>
  );
};

/*
<input
          type="checkbox"
          checked={polozka.vyrizeno}
          onChange={(event) => {
            db.collection('chci_pocitac').doc(polozka.id).update({
              vyrizeno: event.target.checked,
            });
          }}
        />

        */
