var React = require('react');
import Router from 'react-router';
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

import Master from './pages/Master';
import Home from './pages/Home';
import Login from './pages/Login';

import { LoginRequired } from './util/RouteHelpers';

module.exports = (
  <Route>
    <Route handler={Login} name="Login" path="Login"/>
    <Route handler={LoginRequired}>
      <Route handler={Master}>
        <DefaultRoute handler={Home} name="Home"/>
      </Route>
    </Route>
  </Route>
);