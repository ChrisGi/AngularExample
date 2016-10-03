(function () {
  module.exports = ArtistController;

  ArtistController.$inject = ['artistservice', '$log'];

  function ArtistController(artistservice, $log) {
    var vm = this;
    vm.artist = {};

    activate();

    function activate() {
      $log.info('Activate artist');
      return getArtist();
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
