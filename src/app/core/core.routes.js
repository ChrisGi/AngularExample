(function () {
  module.exports = StateConfig;

  StateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* eslint no-unused-vars: ["error", { "args": "none" }] */
  function StateConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('404', {
        url: '/404',
        templateUrl: 'app/core/404.html',
        title: '404'
      });
  }
})();
