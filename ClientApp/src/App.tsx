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
import { ListOfUnconfirmed } from "./Pages/AdminSightingsList/AdminSightingsList";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/getting-started' component={GettingStarted} />
        <Route path='/submit-sighting' component={SubmitSightingForm} />
        <Route path='/conservation' component={Conservation} />
        <Route exact path='/admin' component={AdminLogin} />
        <Route exact path='/admin/confirm-sighting' component={ListOfUnconfirmed} />
        <Route exact path='/admin/confirm-sighting/:id' component={ConfirmSightingForm} />
      </Layout>
    );
  }
}
