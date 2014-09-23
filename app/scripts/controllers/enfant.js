'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:EnfantCtrl
 * @description
 * # EnfantCtrl
 * Controller of the ecoleApp
 */
 angular.module('ecoleApp')
 .controller('EnfantCtrl', function ($scope, $routeParams, $modal, enfantsService, responsableService, typeResponsableService, responsableEnfantService, notificationservice) {
    var idEnfant = $routeParams.id;
    var modalInstance ;
    $scope.dataLoaded = false ;
    $scope.init = function(){
        $scope.enfant = enfantsService.get({id: idEnfant});
        $scope.enfant.$promise.then(function(){
            $scope.dataLoaded = true ;
        })
        $scope.responsables = responsableService.query({all : "true"});
        $scope.typeResponsables = typeResponsableService.query();
        reloadResponsablesEnfant();
    }


    $scope.deleteResponsableEnfant = function(responsableEnfant){
           responsableEnfantService.delete({id: responsableEnfant.idresponsableEnfant}, function () {
         reloadResponsablesEnfant();
         notificationservice.add("Responsable enlevé ( "+ responsableEnfant.idresponsable.prenom +" "+ responsableEnfant.idresponsable.nom + " ) de l'enfant : "+ $scope.enfant.prenom +" " + $scope.enfant.prenom, "warning");
     });
    }

    function reloadResponsablesEnfant(){
        $scope.responsableEnfants = responsableEnfantService.query({byEnfant : idEnfant});
    }

    $scope.updateEnfant = function () {
        enfantsService.update($scope.enfant);
    };

    $scope.openResponsableModal = function(){
        modalInstance = $modal.open({
            templateUrl: 'views/template/formresponsable.html',
            controller: 'ModalajoutresponsableCtrl'
        });
        modalInstance.result.then(function(){
          $scope.responsables = responsableService.query({all : "true"});
      });
    } 



    $scope.ajoutResponsableEnfant = function () {
        var responsableEnfant = {};
        responsableEnfant.idresponsable = $scope.responsable;
        responsableEnfant.idenfant = $scope.enfant;
        responsableEnfant.idtypeResponsable = $scope.typeResponsable;
        responsableEnfantService.save(
            responsableEnfant,
            function () {
                reloadResponsablesEnfant();
            }
            );
    };

    $scope.init();
});
