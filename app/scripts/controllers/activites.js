'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ActivitesCtrl
 * @description
 * # ActivitesCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('ActivitesCtrl', function ($scope, restService) {
  	var ressourceActivite = restService.getRessource('activite');
  	var ressourceInscription = restService.getRessource('inscription');
  	var ressourceJourSemaineInscription = restService.getRessource('jourSemaineInscritpion');
  	$scope.activites = ressourceActivite.query(); 

  	$scope.activites.$promise.then(function(data){
		angular.forEach(data, function(value, key) {
			/*Récupere les sessions (inscriptions) des activites */
			value.inscriptions = ressourceInscription.query({
	            byActivite: value.idactivite
	        });
	        /*Récupere les jours de la semaine des session */
    		value.inscriptions.$promise.then(function(data){
				angular.forEach(data, function(value, key) {
					value.jours = ressourceJourSemaineInscription.query({
			            byInscription: value.idinscription
			        });
				});
			});
		});
  	});

 
  });
