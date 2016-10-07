(function () {
  require('./core/core.module');
  require('./header/header.module');
  require('./album/album.module');
  require('./main/main.module');
  require('./artist/artist.module');
  require('./track/track.module');
  require('./search/search.module');

  var stateConfig = require('./app.config');

  angular
    .module('app', [
      'app.core',
      'app.header',
      'app.main',
      'app.album',
      'app.artist',
      'app.track',
      'app.search'])
    .config(stateConfig);
})();
