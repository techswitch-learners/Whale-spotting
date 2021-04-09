import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./Pages/Home/Home";
import "bootstrap";
import "./custom.css";
import { SubmitSightingForm } from "./Pages/SubmitSighting/SubmitSighting";
import { GettingStarted } from "./Pages/GettingStarted/GettingStarted";
import { Conservation } from "./Pages/Conservation/Conservation";
import { WhaleSpecies } from "./Pages/WhaleSpecies/WhaleSpecies";
import { ListOfUnconfirmed } from "./Pages/AdminSightingsList/AdminSightingsList";
import { ConfirmSightingForm } from "./Pages/ConfirmSighting/ConfirmSighting";
import { ApplicationPaths } from "./components/api-authorization/ApiAuthorizationConstants";
import AuthorizeRoute from "./components/api-authorization/AuthorizeRoute";
import ApiAuthorizationRoutes from "./components/api-authorization/ApiAuthorizationRoutes";
import { SearchSightingForm } from "./Pages/SearchSightings/SearchSightings";
import { LeafletMap } from "./Pages/Map/Map";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/getting-started" component={GettingStarted} />
        <Route path="/submit-sighting" component={SubmitSightingForm} />
        <Route path="/search-sighting" component={SearchSightingForm} />
        <Route path="/conservation" component={Conservation} />
        <Route path="/whale-species" component={WhaleSpecies} />
        <Route path="/map" component={LeafletMap} />
        <AuthorizeRoute exact path="/admin" component={ListOfUnconfirmed} />
        <AuthorizeRoute
          exact
          path="/admin/confirm-sighting"
          component={ListOfUnconfirmed}
        />
        <AuthorizeRoute
          exact
          path="/admin/confirm-sighting/:id"
          component={ConfirmSightingForm}
        />
        <Route
          path={ApplicationPaths.ApiAuthorizationPrefix}
          component={ApiAuthorizationRoutes}
        />
      </Layout>
    );
  }
}
