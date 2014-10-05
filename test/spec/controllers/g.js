'use strict';

describe('Controller: GCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var GCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GCtrl = $controller('GCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
