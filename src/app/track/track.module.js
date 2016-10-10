(function () {
  var trackComponent = require('./track.component');
  var trackService = require('./track.service');
  var playButton = require('./track.play.directive');
  var trackController = require('./track.controller');
  var filter = require('./track.filter');

  angular
    .module('app.track', [])
    .component('tracks', trackComponent)
    .factory('tracksservice', trackService)
    .controller('TrackController', trackController)
    .directive('playButton', playButton)
    .filter('toUpperCase', filter);
})();
