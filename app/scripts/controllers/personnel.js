'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:PersonnelCtrl
 * @description
 * # PersonnelCtrl
 * Controller of the ecoleApp
 */
 angular.module('ecoleApp')
 .controller('PersonnelCtrl', function ($scope, $routeParams, restService) {
 	var personnelRessource = restService.getRessource('personnel');
 	var id = $routeParams.id;
 	$scope.dataLoaded = false ;
 	
 	$scope.personnel = personnelRessource.get({id: id});
 	$scope.personnel.$promise.then(function(){
 		$scope.dataLoaded = true ;
 	});

 	$scope.updatePersonnel = function () {
 		personnelRessource.update($scope.personnel);
 	};
 });
