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
    .config(function ($routeProvider, $httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
        $httpProvider.defaults.withCredentials = true;


        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/404', {
                templateUrl: '404.html'
            })
            .when('/enfants', {
                templateUrl: 'views/enfants.html',
                controller: 'EnfantsCtrl',
                active : 'enfants'
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
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/personnel/:id', {
                templateUrl: 'views/personnel.html',
                controller: 'PersonnelCtrl'
            })
            .when('/personnels', {
                templateUrl: 'views/personnels.html',
                controller: 'PersonnelsCtrl'
            })
            .when('/personnels/add', {
                templateUrl: 'views/personnels/add.html',
                controller: 'PersonnelsAddCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
