import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './Pages/Home/Home';
import { AdminLogin } from './Pages/AdminLogin/AdminLogin';
import 'bootstrap';
import './custom.css'
import { Conservation } from './Pages/Conservation/Conservation';
import { SubmitSightingForm } from './Pages/SubmitSighting/SubmitSighting';
import { GettingStarted } from './Pages/GettingStarted/GettingStarted';
import { ConfirmSightingForm } from './Pages/ConfirmSighting/ConfirmSighting';

export default class App extends Component {
  static displayName = App.name;
  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />Form
        <Route exact path='/gettingstarted' component={GettingStarted} />
        <Route exact path='/admin' component={AdminLogin} />
        <Route path='/submit-sighting' component={SubmitSightingForm} />
        <Route path='/conservation' component={Conservation} />
        <Route path='/admin/confirm-sighting/:id' component={ConfirmSightingForm} />
      </Layout>
    );
  }
}

