import React from 'react';
import './style.css';

export const Contact = () => {
  return (
    <div className="contact__div">
      <a href="mailto:pocitaceproskolaky@gmail.com" className="contact__a">SPOJTE SE S NÁMI</a>
      <p className="contact__h first">
        Máte nápad na vylepšení projektu Počítače pro školáky?
      </p><hr className="line"/>
      <p className="contact__h middle">
        Chcete poskytnout větší množství počítačů?
      </p><hr className="line"/>
      <p className="contact__h last">Máte dotaz?</p>
         <a className="contact__email"href="mailto:pocitaceproskolaky@gmail.com">Napište nám: pocitaceproskolaky@gmail.com</a>
    </div>
  );
};
