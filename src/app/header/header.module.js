(function () {
  var headerComponent = require('./header.component');

  angular
    .module('app.header', [])
    .component('searchHeader', headerComponent);
})();
