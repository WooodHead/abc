'use strict';

describe('Controller: CCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var CCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CCtrl = $controller('CCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
