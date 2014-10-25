'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ActiviteCtrl
 * @description
 * # ActiviteCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
	.controller('ActiviteCtrl', function($scope, $routeParams, $location, restService, notificationservice) {
		var ressourceActivite = restService.getRessource('activite');
		var ressourceInscription = restService.getRessource('inscription');
		$scope.inscription = {};
		var idActivite = $routeParams.id;
		$scope.dataLoaded = false;

		$scope.init = function() {
			ressourceActivite.get({
				id: idActivite
			}).$promise.then(function(data) {
				$scope.activite = data;
				$scope.dataLoaded = true;
			});

			getSessions();
		};

		$scope.joursSemaines = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Vendredi'];

		$scope.updateActivite = function(activite) {
			ressourceActivite.update($scope.activite);
		};

		$scope.openDatePicker = function($event, datepicker) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope[datepicker] = true;
		};

		$scope.deleteInscription = function(inscription){
			console.log(inscription);
			ressourceInscription.delete({id : inscription.idinscription}).$promise.then(function(){
				getSessions();
				notificationservice.add('Suppression de la session réussie', 'warning');
			});
		}

		$scope.ajoutSessionActivite = function() {
			$scope.inscription.idactivite =
				$scope.inscription.idactivite = $scope.activite;
			ressourceInscription.save($scope.inscription).$promise.then(function(data) {
				notificationservice.add('Ajout de la sessions réussie', 'success');
				$scope.inscription = {};
				$location.path('/inscription/' + data.idinscription);
			});
		};

		function getSessions() {
			ressourceInscription.query({
				byActivite: idActivite
			}).$promise.then(function(data) {
				$scope.inscriptions = data.items;
			})
		};

		$scope.init();

	});