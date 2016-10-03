(function () {
  module.exports = ArtistService;

  ArtistService.$inject = ['$http', '$log'];

  function ArtistService($http, $log) {
    var service = {
      getArtist: getArtist
    };

    return service;

    function getArtist() {
      return $http
        .get('/app/artist/artist.json')
        .then(onSuccess)
        .catch(onError);

      function onSuccess(response) {
        return response.data;
      }

      function onError() {
        $log.error('Error getting artist data');
      }
    }
  }
})();
