import React from 'react';
import './style.css';

export const Contact = () => {
  return (
    <div className="contact__div">
      <a href="mailto:pocitaceproskolaky@gmail.com" className="contact__a">SPOJTE SE S NÁMI</a>
      <p className="contact__h first">
        Máte nápad na vylepšení projektu Počítače pro školáky?
      </p><div className="line"></div>
      <p className="contact__h middle">
        Chcete poskytnout větší množství počítačů?
      </p><div className="line"></div>
      <p className="contact__h last">Máte dotaz?</p>
      <p className="contact__email">
        Napište nám: <em className="email">pocitaceproskolaky@gmail.com</em>
      </p>
    </div>
  );
};
