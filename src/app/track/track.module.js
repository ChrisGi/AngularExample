(function () {
  var trackComponent = require('./track.component');
  var trackService = require('./track.service');

  angular
    .module('app.track', [])
    .component('tracks', trackComponent)
    .factory('tracksservice', trackService);
})();
