(function () {
  var angular = require('angular');

  var trackComponent = require('./track.component');

  angular
    .module('app.track', [
      'app.core',
      'app.header'
    ])
    .component('track', trackComponent);
})();
