'use strict';

describe('Controller: HCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var HCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HCtrl = $controller('HCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
