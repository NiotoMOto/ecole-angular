'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:PersonnelsAddCtrl
 * @description
 * # PersonnelsAddCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('PersonnelsAddCtrl', function ($scope, $location, personnelService) {
  	$scope.formpersonnel = {};

  	$scope.savePersonnel = function(){
  		personnelService.save(
  			$scope.formpersonnel,
  			function(){
  				$location.path("/personnels")
  			}
		);
  	}

  });
