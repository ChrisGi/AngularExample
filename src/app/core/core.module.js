(function () {
  require('angular-ui-router');
  var stateConfig = require('./core.routes');
  var httpInterceptor = require('./core.httpinterceptor');
  angular
    .module('app.core', [
      'ui.router'
    ])
    .service('httpinterceptor', httpInterceptor)
    .config(stateConfig);
})();
