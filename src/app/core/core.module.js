(function () {
  require('angular-ui-router');
  var stateConfig = require('./core.routes');
  angular
    .module('app.core', [
      'ui.router'
    ])
    .config(stateConfig);
})();
