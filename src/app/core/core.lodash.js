(function () {
  module.exports = LodashFactory;

  LodashFactory.$inject = ['$window'];

  function LodashFactory($window) {
    return $window._;
  }
})();
