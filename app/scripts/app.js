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
    'ngTouch',
    'ui.bootstrap',
    'ui.select'
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
    .when('/activites', {
      templateUrl: 'views/activites.html',
      controller: 'ActivitesCtrl'
    })
    .when('/activite/:id', {
      templateUrl: 'views/activite.html',
      controller: 'ActiviteCtrl'
    })
    .when('/activites/add', {
      templateUrl: 'views/activites/add.html',
      controller: 'ActivitesAddCtrl'
    })
    .when('/sessionActivite/:id', {
      templateUrl: 'views/sessionactivite.html',
      controller: 'SessionactiviteCtrl'
    })
    .when('/inscription/:id', {
      templateUrl: 'views/inscription.html',
      controller: 'InscriptionCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
})
.run(function(userService) { 
     userService.getUser().success(function(user){
        userService.user = user ;
        userService.isLogged = true ;
    });
});


