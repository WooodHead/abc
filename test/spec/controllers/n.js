'use strict';

describe('Controller: NCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var NCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NCtrl = $controller('NCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
