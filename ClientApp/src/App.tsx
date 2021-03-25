import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './Pages/Home/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import './custom.css'
import { SubmitSightingForm } from './Pages/SubmitSighting/SubmitSighting';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/submit-sighting' component={SubmitSightingForm} />
      </Layout>
    );
  }
}
