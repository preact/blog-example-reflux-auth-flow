import React from 'react';
import Router from 'react-router';
import Reflux from 'reflux';

import AuthStore from 'stores/AuthStore';
import AuthActions from 'actions/AuthActions';

var AuthStatus = React.createClass({
  mixins: [
    Router.Navigation,
    Reflux.connect(AuthStore),
    Reflux.ListenerMixin
  ],

  componentWillMount () {
    // TODO: is there a smarter way to do this?
    this.setState(AuthStore.getState());
  },

  componentDidMount () {
    this.listenTo(AuthStore, this.onAuthChange);
  },

  onAuthChange(auth) {
    this.setState(auth);
  },

  handleLogout() {
    AuthActions.logout();
    this.transitionTo('/login');
  },

  render() {
    if(this.state.user){
      return (
        <section>
          Hi, { this.state.user.name }!
          <div>
            <button onClick={ this.handleLogout }>Log Out</button>
          </div>
        </section>
      );
    }
  }
});


module.exports = AuthStatus;