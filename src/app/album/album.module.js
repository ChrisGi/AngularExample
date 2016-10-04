(function () {
  var albumComponent = require('./album.component');
  var albumService = require('./album.service');

  angular
    .module('app.album', [])
    .component('album', albumComponent)
    .factory('albumservice', albumService);
})();
