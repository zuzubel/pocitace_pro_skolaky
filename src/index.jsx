import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header/index.jsx';
import { For } from './components/For/index.jsx';
import { AboutProject } from './components/AboutProject';
import { HowItWorks } from './components/HowItWorks/index.jsx';
import { Form } from './components/Form/index';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          <For />
        </Route>
        <Route path="/about_project">
          <AboutProject />
          <HowItWorks />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </Switch>
      <footer>Czechitas</footer>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
