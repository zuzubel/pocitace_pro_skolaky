import React, { useEffect, useState } from 'react';
import { db } from '../../db';

export const Form = () => {
  const [polozky, setPolozky] = useState([]);
  const [nazev, setNazev] = useState('');

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
          db.collection('chci_pocitac').add({ info: nazev });
          setNazev('');
        }}
      >
        <label>
          Název:
          <input
            value={nazev}
            onChange={(event) => setNazev(event.target.value)}
          />
        </label>
        <button>Přidat poptávku</button>
      </form>
      <h2>Co nám formulář vypisuje: </h2>
      <ul>
        {polozky.map((polozka, i) => (
          <li key={i}>{polozka.info}</li>
        ))}
      </ul>
    </>
  );
};
