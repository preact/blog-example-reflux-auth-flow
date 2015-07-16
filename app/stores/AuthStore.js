import Reflux from 'reflux';
import Actions from 'actions/AuthActions';

var renderTimeout = 250; // set a timeout to simulate async response time

var AuthStore = Reflux.createStore({
  listenables: Actions,

  init () {
    // pull cached token if one exists
    this.jwt = localStorage.getItem('jwt');

    this.claims = this.parseJwt();
    this.error = false;
    this.loading = false;
  },

  getState () {
    return {
      loading: this.loading,
      error: this.error,
      user: this.userFromClaims(),
      loggedIn: this.loggedIn()
    };
  },

  userFromClaims () {
    // will want to do some cleanup of the claims
    // because they're designed to be very small field names for xfer size
    return this.claims;
  },

  loggedIn () {
    // helper
    return this.claims !== null;
  },

  changed () {
    this.trigger(this.getState());
  },

  onLogin (email, password) {
    this.loading = true;
    this.changed();

    // fake API simulation
    setTimeout(function() {
      var auths = require('./AuthStore.sampleData.json');
      Actions.login.completed(auths[`${email}:${password}`]);
    }, renderTimeout);
  },

  onLoginCompleted (authResponse) {
    if(authResponse){
      this.jwt = authResponse.jwt;
      this.claims = this.parseJwt();
      this.error = false;

      localStorage.setItem('jwt', this.jwt);
    } else {
      this.error = 'Username or password invalid.';
    }

    this.loading = false;
    this.changed();
  },

  onLogout () {
    // clear it all
    this.jwt = null;
    this.claims = null;
    this.error = false;
    this.loading = false;
    localStorage.removeItem('jwt');
  },

  parseJwt () {
    if(this.jwt === null){ return null; }
    return JSON.parse(atob(this.jwt.split('.')[1]));
  }

});

module.exports = AuthStore;