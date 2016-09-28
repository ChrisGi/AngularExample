var angular = require('angular');

var main = require('./app/main');
var album = require('./app/album/album');
var artist = require('./app/artist/artist');
require('angular-ui-router');
var routesConfig = require('./routes');

require('./styles.css');

var header = require('./app/header/header');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('album', album)
  .component('searchHeader', header)
  .component('artist', artist);
