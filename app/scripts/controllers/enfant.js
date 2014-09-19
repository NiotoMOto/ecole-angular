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

        $scope.init = function(){
            $scope.enfant = enfantsService.get({id: idEnfant});
            $scope.responsables = responsableService.query({all : "true"});
            $scope.typeResponsables = typeResponsableService.query();
            $scope.responsableEnfants = responsableEnfantService.query();
        }

        $scope.updateEnfant = function () {
            enfantsService.update($scope.enfant);
        };


        $scope.ajoutResponsableEnfant = function () {
            var responsableEnfant = {};
            responsableEnfant.idresponsable = $scope.responsable;
            responsableEnfant.idenfant = $scope.enfant;
            responsableEnfant.idtypeResponsable = $scope.typeResponsable;
            responsableEnfantService.save(
                responsableEnfant,
                function () {
                    $scope.responsableEnfants = responsableEnfantService.query();
                }
            );
        };

        $scope.init();
    });
