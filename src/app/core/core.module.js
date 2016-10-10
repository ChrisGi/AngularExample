(function () {
  require('angular-ui-router');
  require('lodash');
  var stateConfig = require('./core.routes');
  var httpInterceptor = require('./core.httpinterceptor');
  var lodashFactory = require('./core.lodash');
  angular
    .module('app.core', [
      'ui.router'
    ])
    .factory('_', lodashFactory)
    .service('httpinterceptor', httpInterceptor)
    .config(stateConfig);
})();
