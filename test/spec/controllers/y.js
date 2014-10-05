'use strict';

describe('Controller: YCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var YCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YCtrl = $controller('YCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
