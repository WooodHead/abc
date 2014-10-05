'use strict';

describe('Controller: OCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var OCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OCtrl = $controller('OCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
