(function () {
  module.exports = interceptHttp;

  interceptHttp.$inject = ['$log', '$q', '$location', '$state'];

  /* eslint no-unused-vars: ["error", { "args": "none" }] */
  function interceptHttp($log, $q, $location, $state) {
    var interceptService = {
      request: request,
      response: response,
      responseError: responseError
    };

    return interceptService;

    function request(config) {
      return config;
    }

    function response(response) {
      return response;
    }

    function responseError(rejection) {
      if (rejection.status === 404) {
        $state.go('404');
      }

      return $q.reject(rejection);
    }
  }
})();
