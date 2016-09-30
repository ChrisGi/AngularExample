(function () {
  module.exports = albumsService;

  albumsService.$inject = ['$http', '$log'];

  function albumsService($http, $log) {
    var service = {
      getAlbums: getAlbums,
      getAlbum: getAlbum
    };

    return service;

    function getAlbums() {
      return $http
        .get('app/album/albums.json')
        .then(onCompleted)
        .catch(onError);

      function onCompleted(response) {
        return response.data;
      }

      function onError(error) {
        $log.error('Error on loading albums %s', error.data);
      }
    }

    function getAlbum(index) {
      return getAlbums().then(function (albums) {
        return albums[index];
      });
    }
  }
})();
