'use strict';

describe('Controller: JCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var JCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JCtrl = $controller('JCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
