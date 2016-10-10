(function () {
  module.exports = TracksService;

  TracksService.$inject = ['$http', '$log'];

  function TracksService($http, $log) {
    var service = {
      getTracks: getTracks
    };

    return service;

    function getTracks() {
      return $http
        .get('/app/track/tracks.json')
        .then(onCompleted)
        .catch(onError);

      function onCompleted(response) {
        return angular.fromJson(response.data).tracks;
      }

      function onError(error) {
        $log.error("Error on loading tracks: %s", error);
      }
    }
  }
})();
