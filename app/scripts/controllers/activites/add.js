'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ActivitesAddCtrl
 * @description
 * # ActivitesAddCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('ActivitesAddCtrl', function ($scope, restService, $location, notificationservice) {
  	var ressourceActivite = restService.getRessource('activite');

  	$scope.saveActivite = function(){
  		ressourceActivite.save($scope.activite).$promise.then(function(data){
			$location.path('/activite/' + data.idactivite);
			notificationservice.add("Ajout activite " + data.libelle, "success");
  		});
  	};
  });
