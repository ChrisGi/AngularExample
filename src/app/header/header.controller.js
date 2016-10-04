(function () {
  module.exports = HeaderController;

  HeaderController.$inject = ['$log'];

  function HeaderController($log) {
    var vm = this;
    vm.title = 'Spotify example';
    vm.search = search;

    function search() {
      $log.info('Search clicked');
    }
  }
})();
