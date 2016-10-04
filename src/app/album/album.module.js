(function () {
  var albumComponent = require('./album.component');

  angular
    .module('app.album', [
      'app.core',
      'app.header'
    ])
    .component('album', albumComponent);
})();
