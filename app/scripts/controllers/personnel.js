'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:PersonnelCtrl
 * @description
 * # PersonnelCtrl
 * Controller of the ecoleApp
 */
 angular.module('ecoleApp')
 .controller('PersonnelCtrl', function ($scope, $routeParams, personnelService) {
 	var id = $routeParams.id;
 	$scope.dataLoaded = false ;
 	
 	$scope.personnel = personnelService.get({id: id});
 	$scope.personnel.$promise.then(function(){
 		$scope.dataLoaded = true ;
 	});

 	$scope.updatePersonnel = function () {
 		personnelService.update($scope.personnel);
 	};
 });
