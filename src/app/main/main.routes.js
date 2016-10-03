(function () {
  require('angular-ui-router');

  module.exports = configurator;

  configurator.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configurator($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app');

    $stateProvider
      .state('app', {
        url: '/',
        component: 'main-page'
      });
  }
})();
