(function () {
  module.exports = StateConfig;

  StateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* eslint no-unused-vars: ["error", { "args": "none" }] */
  function StateConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main-el', {
        url: '/',
        component: 'main-page'
      });
  }
})();
