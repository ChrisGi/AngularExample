(function () {
  module.exports = StateConfig;

  StateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* eslint no-unused-vars: ["error", { "args": "none" }] */
  function StateConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('artist', {
        url: '/artist',
        component: 'artist'
      });
  }
})();
