(function () {
  module.exports = SearchController;

  SearchController.$inject = ['$log', 'searchservice'];

  /* eslint no-unused-vars: ["error", { "args": "none" }] */
  function SearchController($log, searchservice) {
    var vm = this;
    vm.searchValue = '';
    vm.searchedData = [];
    vm.search = search;

    function search(value) {
      $log.info(value);
      searchservice.search(value)
        .then(function (response) {
          $log.info(response);
          vm.searchedData = response.data;
        });
    }
  }
})();
