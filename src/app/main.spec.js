var angular = require('angular');
require('angular-mocks');
var hello = require('./main');

describe('main component', function () {
  beforeEach(function () {
    angular
      .module('fountainHello', ['app/main.html'])
      .component('fountainHello', hello);
    angular.mock.module('fountainHello');
  });
  it('should render main world', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<fountain-main>Loading...</fountain-main>')($rootScope);
    $rootScope.$digest();
    var h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
