(function () {
  var angular = require('angular');

  var mainConfig = require('./main.routes.js');
  var mainComponent = require('./main.component');

  var main = 'app.main';
  module.exports = main;

  angular
    .module(main, [
      'app.core',
      'app.header'
    ])
    .config(mainConfig)
    .component('main-page', mainComponent);
})();
