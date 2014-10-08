'use strict';

describe('Directive: appleAnimation', function () {

  // load the directive's module
  beforeEach(module('abcApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<apple-animation></apple-animation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the appleAnimation directive');
  }));
});
