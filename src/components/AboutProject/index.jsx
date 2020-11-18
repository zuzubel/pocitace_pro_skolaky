import React, { useState } from 'react';
import './style.css';

export const AboutProject = () => {
  return (
    <>
      <div className="aboutProject">
        <h1 className="aboutProject--h">O projektu</h1>
        <p className="aboutProject--p">
          Pandemie koronaviru přenusula studium do online prostředí. Mnoho žáků
          a studentů ale nemá vyhovující podmínky a každým dnem jim tak utíká
          část výuky. Tuto zrátu budou po návratu do škol stěží dohánět. Pojďme
          společně pomoci! Dostaňme nepotřebnou IT techniku ke studentům, kteří
          ji potřebují.
        </p>
      </div>
    </>
  );
};
