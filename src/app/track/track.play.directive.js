(function () {
  module.exports = playTrackDirective;

  /* eslint no-unused-vars: ["error", { "args": "none" }] */
  function playTrackDirective($log) {
    var playIcon = require('../../assets/img/play-circle-outline.png');
    var stopIcon = require('../../assets/img/stop-circle-outline.png');

    var directive = {
      restrict: 'EA',
      templateUrl: '/app/track/play_button.html',
      scope: {},
      controller: 'TrackController',
      controllerAs: 'vm',
      bindToController: {
        trackId: '@'
      },
      link: link
    };

    return directive;

    function link(scope, element, attrs, controller) {
      var isPlayed = false;

      scope.icon = playIcon;
      scope.play = play;

      function play() {
        if (isPlayed) {
          scope.icon = playIcon;
          isPlayed = false;
        } else {
          controller.play();
          scope.icon = stopIcon;
          isPlayed = true;
        }
      }
    }
  }
})();
