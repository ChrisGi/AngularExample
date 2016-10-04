(function () {
  require('./core/core.module');
  require('./header/header.module');
  require('./album/album.module');
  require('./main/main.module');
  angular.module('app', [
    'app.core',
    'app.main',
    'app.album',
    'app.header']);
})();
