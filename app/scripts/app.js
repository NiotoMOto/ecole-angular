'use strict';

/**
 * @ngdoc overview
 * @name ecoleApp
 * @description
 * # ecoleApp
 *
 * Main module of the application.
 */
angular
  .module('ecoleApp', [
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
      .when('/enfants', {
        templateUrl: 'views/enfants.html',
        controller: 'EnfantsCtrl'
      })
      .when('/enfant/:id', {
        templateUrl: 'views/enfant.html',
        controller: 'EnfantCtrl'
      })
      .when('/enfants/add', {
        templateUrl: 'views//enfants/add.html',
        controller: 'EnfantsAddCtrl'
      })
      .when('/responsables', {
        templateUrl: 'views/responsables.html',
        controller: 'ResponsablesCtrl'
      })
      .when('/responsables/add', {
        templateUrl: 'views/responsables/add.html',
        controller: 'ResponsablesAddCtrl'
      })
      .when('/responsable/:id', {
        templateUrl: 'views/responsable.html',
        controller: 'ResponsableCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
