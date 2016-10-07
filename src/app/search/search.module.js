(function () {
  var searchController = require('./search.controller');
  var stateConfig = require('./search.routes');
  var searchService = require('./search.service');

  angular
    .module('app.search', [])
    .config(stateConfig)
    .controller('SearchController', searchController)
    .service('searchservice', searchService);
})();
