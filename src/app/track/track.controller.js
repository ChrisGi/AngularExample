(function () {
  module.exports = trackController;

  trackController.$inject = ['tracksservice', '$log'];

  function trackController(tracksservice, $log) {
    var vm = this;
    vm.tracks = [];
    vm.trackPlayIcon = require('../../assets/img/play-circle-outline.png');

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
  }
})();
