import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './Pages/Home/Home';
import { AdminLogin } from './Pages/AdminLogin/AdminLogin';
import 'bootstrap';
import './custom.css'
import { SubmitSightingForm } from './Pages/SubmitSighting/SubmitSighting';
import { Conservation } from './Pages/Conservation/Conservation';
// import authService from './api-authorization/AuthorizeService';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/admin' component={AdminLogin} />
        {/* <AuthorizeRoute path='/admin/confirm-sightings' component={ConfirmSightings}/> */}
        <Route path='/submit-sighting' component={SubmitSightingForm} />
        <Route path='/conservation' component={Conservation} />
      </Layout>
    );
  }
}
