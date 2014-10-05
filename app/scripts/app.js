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
      .when('/a', {
        templateUrl: 'views/a.html',
        controller: 'ACtrl'
      })
      .when('/b', {
        templateUrl: 'views/b.html',
        controller: 'BCtrl'
      })
      .when('/c', {
        templateUrl: 'views/c.html',
        controller: 'CCtrl'
      })
      .when('/d', {
        templateUrl: 'views/d.html',
        controller: 'DCtrl'
      })
      .when('/e', {
        templateUrl: 'views/e.html',
        controller: 'ECtrl'
      })
      .when('/f', {
        templateUrl: 'views/f.html',
        controller: 'FCtrl'
      })
      .when('/g', {
        templateUrl: 'views/g.html',
        controller: 'GCtrl'
      })
      .when('/h', {
        templateUrl: 'views/h.html',
        controller: 'HCtrl'
      })
      .when('/i', {
        templateUrl: 'views/i.html',
        controller: 'ICtrl'
      })
      .when('/j', {
        templateUrl: 'views/j.html',
        controller: 'JCtrl'
      })
      .when('/k', {
        templateUrl: 'views/k.html',
        controller: 'KCtrl'
      })
      .when('/l', {
        templateUrl: 'views/l.html',
        controller: 'LCtrl'
      })
      .when('/m', {
        templateUrl: 'views/m.html',
        controller: 'MCtrl'
      })
      .when('/n', {
        templateUrl: 'views/n.html',
        controller: 'NCtrl'
      })
      .when('/o', {
        templateUrl: 'views/o.html',
        controller: 'OCtrl'
      })
      .when('/p', {
        templateUrl: 'views/p.html',
        controller: 'PCtrl'
      })
      .when('/q', {
        templateUrl: 'views/q.html',
        controller: 'QCtrl'
      })
      .when('/r', {
        templateUrl: 'views/r.html',
        controller: 'RCtrl'
      })
      .when('/s', {
        templateUrl: 'views/s.html',
        controller: 'SCtrl'
      })
      .when('/t', {
        templateUrl: 'views/t.html',
        controller: 'TCtrl'
      })
      .when('/u', {
        templateUrl: 'views/u.html',
        controller: 'UCtrl'
      })
      .when('/v', {
        templateUrl: 'views/v.html',
        controller: 'VCtrl'
      })
      .when('/w', {
        templateUrl: 'views/w.html',
        controller: 'WCtrl'
      })
      .when('/x', {
        templateUrl: 'views/x.html',
        controller: 'XCtrl'
      })
      .when('/y', {
        templateUrl: 'views/y.html',
        controller: 'YCtrl'
      })
      .when('/z', {
        templateUrl: 'views/z.html',
        controller: 'ZCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
