(function () {
  var stateConfig = require('./main.routes.js');
  var mainComponent = require('./main.component');

  angular
    .module('app.main', [
      'app.core'])
    .config(stateConfig)
    .component('main-page', mainComponent);
})();
