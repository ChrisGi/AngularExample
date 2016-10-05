(function () {
  module.exports = trackController;

  trackController.$inject = ['tracksservice', '$log'];

  function trackController(tracksservice, $log) {
    var vm = this;
    vm.tracks = [];
    vm.play = playTrack;

    activate();

    function activate() {
      $log.info('Activate tracks');
      return getTracks();
    }

    function getTracks() {
      tracksservice.getTracks()
        .then(function (data) {
          vm.tracks = data;
          return vm.tracks;
        });
    }

    function playTrack() {
      $log.info('Play track %s', vm.trackId);
    }
  }
})();
