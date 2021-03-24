import React, { Component } from 'react';
//import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { GettingStarted} from './components/GettingStarted/GettingStarted';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/gettingstarted">
          <GettingStarted/>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
