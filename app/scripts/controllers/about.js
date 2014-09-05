'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('AboutCtrl', function ($scope, enfantsService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.enfants = enfantsService.query();
  });
