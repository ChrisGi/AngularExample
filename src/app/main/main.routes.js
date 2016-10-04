(function () {
  module.exports = StateConfig;

  StateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* eslint no-unused-vars: ["error", { "args": "none" }] */
  function StateConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        component: 'app'
      });
  }
})();
