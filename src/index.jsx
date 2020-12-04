import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header/index.jsx';
import { For } from './components/For/index.jsx';
import { AboutProject } from './components/AboutProject';
import { HowItWorks } from './components/HowItWorks/index.jsx';
import { Form } from './components/Form/index';
import { Contact } from './components/Contact/index';
import { Footer } from './components/Footer/index';
import { Donate } from './components/Donate/index';
import { db } from './db';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    return db
      .collection('chci_pocitac')
      .orderBy('date', "desc")
      .onSnapshot((querySnapshot) => {
        setItems(
          querySnapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );
      });
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about_project">
          <AboutProject />
          <HowItWorks />
        </Route>
        <Route path="/donate">
          <Donate items={items} />
        </Route>
        <Route path="/form">
          <Form items={items} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/home">
          <For />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
