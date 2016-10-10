(function () {
  module.exports = SearchController;

  SearchController.$inject = ['$log', 'searchservice', '_'];

  /* eslint no-unused-vars: ["error", { "args": "none" }] */
  function SearchController($log, searchservice, _) {
    var vm = this;
    vm.searchValue = '';
    vm.searchedData = [];
    vm.search = search;

    function search(value) {
      $log.info(value);
      searchservice.search(value)
        .then(function (response) {
          $log.info(response);
          vm.searchedData = filterByPopularity(response.data.artists.items);
        });
    }

    function filterByPopularity(artists) {
      return _.filter(artists, function (artist) {
        return artist.popularity > 50;
      });
    }
  }
})();
