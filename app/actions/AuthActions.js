import Reflux from 'reflux';

export default Reflux.createActions({
  login: {children: ['completed', 'failed']},
  logout: {}
});