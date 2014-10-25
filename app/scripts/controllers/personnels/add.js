'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:PersonnelsAddCtrl
 * @description
 * # PersonnelsAddCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
    .controller('PersonnelsAddCtrl', function ($scope, $location, restService, notificationservice) {
        var ressourcePersonnel = restService.getRessource('personnel');
        $scope.formpersonnel = {};

        $scope.savePersonnel = function () {
            ressourcePersonnel.save(
                $scope.formpersonnel,
                function (data) {
                    $location.path("/personnels");
                    notificationservice.add("Ajout personnel "  + data.prenom + " " + data.nom, "success");
                }
            );
        }
    });
