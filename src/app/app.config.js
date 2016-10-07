(function () {
  module.exports = Config;

  Config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider'];

  /* eslint no-unused-vars: ["error", { "args": "none" }] */
  function Config($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $httpProvider.interceptors.push('httpinterceptor');
  }
})();
