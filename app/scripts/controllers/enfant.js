'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:EnfantCtrl
 * @description
 * # EnfantCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('EnfantCtrl', function ($scope, $routeParams, enfantsService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var idEnfant = $routeParams.id;
    $scope.enfant = enfantsService.get({id : idEnfant});
  });
