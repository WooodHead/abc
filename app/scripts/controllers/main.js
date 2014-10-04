'use strict';

/**
 * @ngdoc function
 * @name abcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the abcApp
 */
angular.module('abcApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
