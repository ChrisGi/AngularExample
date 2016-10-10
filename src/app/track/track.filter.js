(function () {
  module.exports = MakeUpperCase;

  function MakeUpperCase() {
    return function (item) {
      return item.toUpperCase();
    };
  }
})();
