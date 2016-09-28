var angular = require('angular');

var main = require('./app/main');
var album = require('./app/album/album');
var artist = require('./app/artist/artist');
require('angular-ui-router');
var routesConfig = require('./routes');

require('./styles.css');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('album', album)
  .component('artist', artist);
