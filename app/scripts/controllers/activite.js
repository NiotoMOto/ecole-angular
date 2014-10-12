'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ActiviteCtrl
 * @description
 * # ActiviteCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('ActiviteCtrl', function ($scope, $routeParams, restService) {
  	var ressourceActivite = restService.getRessource('activite');
  	var ressourceInscription = restService.getRessource('inscription');
  	var ressourceJourSemaineInscription = restService.getRessource('jourSemaineInscritpion');

	var idActivite = $routeParams.id;
	$scope.dataLoaded = false ;

	$scope.activite = ressourceActivite.get({
		id: idActivite
	});
	$scope.activite.$promise.then(function(){
		$scope.dataLoaded = true ;
	})

	$scope.inscriptions = ressourceInscription.query({
		byActivite: idActivite
	});

	$scope.inscriptions.$promise.then(function(data){
			angular.forEach(data, function(value, key) {
				value.jours = ressourceJourSemaineInscription.query({
					byInscription: value.idinscription
				});
		});
	})
	   		

	
  	 console.log($scope.inscriptions);
  });
