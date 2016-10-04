(function () {
  module.exports = playTrackDirective;

  function playTrackDirective() {
    var directive = {
      restrict: 'EA',
      templateUrl: '/app/track/play_button.html',
      scope: {
        buttonIcon: '@'
      }
    };

    return directive;
  }
})();
