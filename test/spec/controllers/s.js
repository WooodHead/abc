'use strict';

describe('Controller: SCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var SCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SCtrl = $controller('SCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
