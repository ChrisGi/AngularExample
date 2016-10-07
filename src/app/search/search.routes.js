(function () {
  module.exports = StateConfig;

  StateConfig.$inject = ['$stateProvider'];

  function StateConfig($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: '/app/search/search.html',
        controller: 'SearchController',
        controllerAs: 'sc'
      });
  }
})();
