import cx from 'classnames';

module.exports = function(style, rules){
  return cx(rules).split(' ').map( className => style[className] ).join(' ');
};