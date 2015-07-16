import React from 'react';
import Router from 'react-router';
import style from './style.scss';

import AuthStatus from 'components/AuthStatus';

var RouteHandler = Router.RouteHandler;

var Master = React.createClass({
  render () {
    return (
      <div className={ style.this }>
        <RouteHandler/>
        <hr/>
        <AuthStatus />
      </div>
    );
  }
});

module.exports = Master;