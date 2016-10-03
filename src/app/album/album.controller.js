(function () {
  module.exports = AlbumController;

  AlbumController.$inject = ['$q', 'albumservice', 'artistservice', '$log'];

  /** @ngInject */
  function AlbumController($q, albumservice, artistservice, $log) {
    var vm = this;
    vm.album = {};
    vm.albums = [];
    vm.artist = {};

    activate();

    function activate() {
      var promises = [getAlbums(), getAlbum(0), getArtist()];
      return $q.all(promises).then(
        function () {
          // success
          $log.info('Activate albums');
        });
    }

    function getAlbum(index) {
      return albumservice.getAlbum(index)
        .then(function (data) {
          vm.album = data;
          return vm.album;
        });
    }

    function getAlbums() {
      return albumservice.getAlbums()
        .then(function (data) {
          vm.albums = data;
          return vm.albums;
        });
    }

    function getArtist() {
      artistservice.getArtist()
        .then(function (a) {
          vm.artist = a;
          return vm.artist;
        });
    }
  }
})();
