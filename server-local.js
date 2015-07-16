// This is a little middleware so that we can preserve pushState
var server = require('pushstate-server');

server.start({
  port: process.env.PORT || 8080,
  directory: './build'
});