import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './Pages/Home/Home';
import { FetchData } from './components/FetchData';
import { AdminLogin } from './Pages/AdminLogin/AdminLogin';
import { Counter } from './components/Counter';
import 'bootstrap';
import './custom.css'
import { SubmitSightingForm } from './Pages/SubmitSighting/SubmitSighting';
import { Conservation } from './Pages/Conservation/Conservation';
import { listOfUnconfirmed } from './Pages/ConfrimSighting/ConfirmSighting';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/admin' component={AdminLogin} />
        <Route path='/submit-sighting' component={SubmitSightingForm} />
        <Route path='/confirm-sighting' component={listOfUnconfirmed} />
        <Route path='/conservation' component={Conservation} />
      </Layout>
    );
  }
}
