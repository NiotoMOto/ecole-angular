'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ResponsablesAddCtrl
 * @description
 * # ResponsablesAddCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('ResponsablesAddCtrl', function ($scope, $location, responsableService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addResponsable = function(){

    	responsableService.save(
    		$scope.formResponsable,
    		function(data){
    			$location.path("responsables")
    		})
    }

    
  });
