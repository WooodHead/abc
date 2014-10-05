'use strict';

/**
 * @ngdoc overview
 * @name abcApp
 * @description
 * # abcApp
 *
 * Main module of the application.
 */
angular
  .module('abcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/letterA', {
        templateUrl: 'views/lettera.html',
        controller: 'LetteraCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
