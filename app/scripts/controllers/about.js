'use strict';

/**
 * @ngdoc function
 * @name abcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the abcApp
 */
angular.module('abcApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
