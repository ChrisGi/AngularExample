(function () {
  var angular = require('angular');

  var albumComponent = require('./album.component');

  angular
    .module('app.module', [
      'app.core',
      'app.header'
    ])
    .component('album', albumComponent);
})();
