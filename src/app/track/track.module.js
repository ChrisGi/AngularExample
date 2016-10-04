(function () {
  var trackComponent = require('./track.component');
  var trackService = require('./track.service');
  var playButton = require('./track.play.directive');

  angular
    .module('app.track', [])
    .component('tracks', trackComponent)
    .factory('tracksservice', trackService)
    .directive('playButton', playButton);
})();
