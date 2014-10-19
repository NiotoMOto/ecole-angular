'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:SessionactiviteCtrl
 * @description
 * # SessionactiviteCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('SessionactiviteCtrl', function ($scope, $routeParams, restService) {
  	var idInscription = $routeParams.id;
  	var ressourceInscription = restService.getRessource('inscription');
  	$scope.inscription = ressourceInscription.get({
  		id : idInscription
  	});

    $scope.inscription.$promise.then(function(){
    });
  });

