(function () {
  module.exports = trackController;

  trackController.$inject = ['tracksservice', '$log'];

  function trackController(tracksservice, $log) {
    var vm = this;
    vm.tracks = [];
    vm.play = playTrack;
    vm.stop = stopPlayingTrack;
    var audio = new Audio();

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
      $log.info('Play track %s', vm.trackPreviewUrl);
      audio.src = vm.trackPreviewUrl;
      audio.play();
    }

    function stopPlayingTrack() {
      $log.info('Stop playing track %s', vm.trackId);
      audio.pause();
    }
  }
})();
