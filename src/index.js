(function () {
  var angular = require('angular');

  var header = require('./app/header/header');
  var main = require('./app/main/main');
  var album = require('./app/album/album');
  var artist = require('./app/artist/artist');
  var track = require('./app/track/track');
  var albumService = require('./app/album/album.service');
  var tracksService = require('./app/track/track.service');
  var artistService = require('./app/artist/artist.service');

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
    .component('searchHeader', header)
    .component('artist', artist)
    .component('tracks', track)
    .factory('albumservice', albumService)
    .factory('tracksservice', tracksService)
    .factory('artistservice', artistService);
})();
