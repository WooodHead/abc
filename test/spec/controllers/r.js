'use strict';

describe('Controller: RCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var RCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RCtrl = $controller('RCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
