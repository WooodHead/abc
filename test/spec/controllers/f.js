'use strict';

describe('Controller: FCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var FCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FCtrl = $controller('FCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
