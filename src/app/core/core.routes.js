(function () {
  module.exports = StateConfig;

  StateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* eslint no-unused-vars: ["error", { "args": "none" }] */
  function StateConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('404');

    $stateProvider
      .state('404', {
        url: '/404',
        templateUrl: 'app/core/404.html',
        title: '404'
      });
  }
})();
