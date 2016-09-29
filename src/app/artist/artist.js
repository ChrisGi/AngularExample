(function () {
  module.exports = {
    template: require('./artist.html'),
    controller: AlbumController
  };

  AlbumController.$inject = ['$q', 'albumservice', '$log'];

  /** @ngInject */
  function AlbumController($q, albumservice, $log) {
    var vm = this;
    vm.album = {};
    vm.albums = [];

    activate();

    function activate() {
      var promises = [getAlbums(), getAlbum(0)];
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
  }
})();
