'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('MainCtrl', function ($scope, userService) {
  	 userService.login();
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
