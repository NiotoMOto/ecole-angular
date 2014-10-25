'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ActivitesCtrl
 * @description
 * # ActivitesCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('ActivitesCtrl', function ($scope, restService, notificationservice) {
  	var ressourceActivite = restService.getRessource('activite');
  	var ressourceInscription = restService.getRessource('inscription');

  	function updateActivite (){
		ressourceActivite.query().$promise.then(function(data){
			$scope.activites = data.items;
			angular.forEach(data.items, function(value) {
				/*Récupere les sessions (inscriptions) des activites */
				ressourceInscription.query({
					byActivite: value.idactivite
				}).$promise.then(function(data){
					value.inscriptions = data.items;
				});
			});
		});
	};


  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  	$scope.deleteActivite = function(activite){
  		ressourceActivite.delete({id : activite.idactivite}).$promise.then(function(){
  			updateActivite();
  			notificationservice.add('Suppression activité réussie', 'warning');
  		});
  	};


  	/** INIT **/
 	updateActivite ();
  });
