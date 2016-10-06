(function () {
  module.exports = interceptHttp;

  interceptHttp.$inject = ['$log', '$location'];

  /* eslint no-unused-vars: ["error", { "args": "none" }] */
  function interceptHttp($log, $location) {
    var interceptService = {
      request: request
    };

    return interceptService;

    function request(config) {
      $log.info("Url: %s", config.url);
      return config;
    }
  }
})();
