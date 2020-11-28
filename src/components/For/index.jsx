import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const For = () => {
  return (
    <div className="for">
      <div className="for__donors">
        <Link to="/donate" className="for__donors--foto"><div ></div></Link>
        <Link className="for__donors--a" to="/donate">
          Chci pomoci
        </Link>
      </div>
      <div className="for__schools">
        <Link to="/form" className="for__schools--foto"><div ></div></Link>
        <Link className="for__schools--a" to="/form">
          Potřebuji pomoc
        </Link>
      </div>
    </div>
  );
};
