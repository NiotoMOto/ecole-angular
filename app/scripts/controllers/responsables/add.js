'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ResponsablesAddCtrl
 * @description
 * # ResponsablesAddCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
    .controller('ResponsablesAddCtrl', function ($scope, $location, responsableService, notificationservice) {
        $scope.addResponsable = function () {

            responsableService.save(
                $scope.formResponsable,
                function (data) {
                    $location.path("responsables")
                    notificationservice.add("Ajout personnel" + data.prenom + " " + data.nom, "success");
                })
        }


    });
