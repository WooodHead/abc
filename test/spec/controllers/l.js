'use strict';

describe('Controller: LCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var LCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LCtrl = $controller('LCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
