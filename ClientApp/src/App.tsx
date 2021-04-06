import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './Pages/Home/Home';
import { AdminLogin } from './Pages/AdminLogin/AdminLogin';
import 'bootstrap';
import './custom.css'
import { SubmitSightingForm } from './Pages/SubmitSighting/SubmitSighting';
import { GettingStarted } from './Pages/GettingStarted/GettingStarted';
import { Conservation } from './Pages/Conservation/Conservation';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import { ListOfUnconfirmed } from "./Pages/AdminSightingsList/AdminSightingsList";
import { ConfirmSightingForm } from './Pages/ConfirmSighting/ConfirmSighting';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/getting-started' component={GettingStarted} />
        <Route path='/submit-sighting' component={SubmitSightingForm} />
        <Route path='/conservation' component={Conservation} />
        <Route exact path='/admin' component={AdminLogin} />
        <AuthorizeRoute path="/admin/confirm-sighting" component={ListOfUnconfirmed} />
        <AuthorizeRoute path='/admin/confirm-sighting/:id' component={ConfirmSightingForm} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
