'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:EnfantCtrl
 * @description
 * # EnfantCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('EnfantCtrl', function ($scope, $routeParams, enfantsService, responsableService, typeResponsableService, responsableEnfantService) {

    var idEnfant = $routeParams.id;
    $scope.enfant = enfantsService.get({id : idEnfant});
    $scope.responsables = responsableService.query();
    $scope.typeResponsables = typeResponsableService.query();
    $scope.responsableEnfants = responsableEnfantService.query();

    $scope.ajoutResponsableEnfant = function(){
    	var responsableEnfant = {};
    	responsableEnfant.idresponsable = $scope.responsable ;
    	responsableEnfant.idenfant = $scope.enfant ;
    	responsableEnfant.idtypeResponsable = $scope.typeResponsable ;
    	responsableEnfantService.save(
    		responsableEnfant,
			function(retour){
				$scope.responsableEnfants = responsableEnfantService.query();
    		}
		)	
    }
  });
