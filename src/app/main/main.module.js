(function () {
  var stateConfig = require('./main.routes.js');
  var mainComponent = require('./main.component');

  angular
    .module('app.main', [])
    .config(stateConfig)
    .component('app', mainComponent);
})();
