'use strict';

describe('Controller: ICtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var ICtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ICtrl = $controller('ICtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
