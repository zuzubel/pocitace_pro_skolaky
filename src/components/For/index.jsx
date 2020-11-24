import React from 'react';
import './style.css';

export const For = () => {
  return (
    <div className="for">
      <div className="for__donors">
        <div className="for__donors--foto"></div>
        <a className="for__donors--a" href="#">
          Chci pomoci
        </a>
      </div>
      <div className="for__schools">
        <div className="for__schools--foto"></div>
        <a className="for__schools--a" href="#">
          Potřebuji pomoc
        </a>
      </div>
    </div>
  );
};
