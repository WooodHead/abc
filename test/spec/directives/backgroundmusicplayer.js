'use strict';

describe('Directive: backgroundMusicPlayer', function () {

  // load the directive's module
  beforeEach(module('abcApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<background-music-player></background-music-player>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the backgroundMusicPlayer directive');
  }));
});
