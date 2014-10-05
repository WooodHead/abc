'use strict';

describe('Controller: QCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var QCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QCtrl = $controller('QCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
