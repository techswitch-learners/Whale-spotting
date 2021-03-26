import React, { Component } from 'react';
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
