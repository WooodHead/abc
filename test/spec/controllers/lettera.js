'use strict';

describe('Controller: LetteraCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var LetteraCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LetteraCtrl = $controller('LetteraCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
