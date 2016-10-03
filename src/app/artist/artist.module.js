(function () {
  var angular = require('angular');

  var artistComponent = require('./artist.component');

  angular
    .module('app.artist', [
      'app.core',
      'app.header'
    ])
    .component('artist', artistComponent);
})();
