(function () {
  var stateConfig = require('./artist.routes');
  var artistComponent = require('./artist.component');
  var artistService = require('./artist.service');

  angular
    .module('app.artist', [])
    .config(stateConfig)
    .component('artist', artistComponent)
    .factory('artistservice', artistService);
})();
