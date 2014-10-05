'use strict';

describe('Controller: WCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var WCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WCtrl = $controller('WCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
