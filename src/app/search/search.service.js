(function () {
  module.exports = SearchService;

  SearchService.$inject = ['$log', '$http'];

  function SearchService($log, $http) {
    var service = {
      search: search
    };

    return service;

    function search(param) {
      return $http
        .get('https://api.spotify.com/v1/search', {params: {q: param, type: 'artist', market: 'US'}})
        .then(onCompleted)
        .catch(onError);

      function onCompleted(response) {
        return response;
      }

      function onError(error) {
        $log.error(error);
      }
    }
  }
})();
