'use strict';

describe('Controller: KCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var KCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KCtrl = $controller('KCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
