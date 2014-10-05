'use strict';

describe('Controller: ACtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var ACtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ACtrl = $controller('ACtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
