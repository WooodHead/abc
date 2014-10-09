'use strict';

/**
 * @ngdoc function
 * @name abcApp.controller:ACtrl
 * @description
 * # ACtrl
 * Controller of the abcApp
 */
angular.module('abcApp')
  .controller('ACtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });