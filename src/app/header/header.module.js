(function () {
  var angular = require('angular');

  var headerComponent = require('./header.component');

  angular
    .module('app.header', [
      'app.core'
    ])
    .component('header', headerComponent);
})();
