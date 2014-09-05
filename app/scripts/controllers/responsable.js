'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ResponsableCtrl
 * @description
 * # ResponsableCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('ResponsableCtrl', function ($scope, $routeParams, responsableService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var id = $routeParams.id ;
    $scope.responsable = responsableService.get({id : id});
  });
