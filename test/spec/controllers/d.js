'use strict';

describe('Controller: DCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var DCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DCtrl = $controller('DCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
