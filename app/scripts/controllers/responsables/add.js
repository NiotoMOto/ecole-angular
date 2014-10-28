'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ResponsablesAddCtrl
 * @description
 * # ResponsablesAddCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
    .controller('ResponsablesAddCtrl', function ($scope, $location, restService, notificationservice) {
        var ressourceResponsable = restService.getRessource('responsable');
        $scope.addResponsable = function (formResponsable) {
            ressourceResponsable.save(
                formResponsable,
                function (data) {
                    $location.path("responsables")
                    notificationservice.add("Ajout responsable" + data.prenom + " " + data.nom, "success");
                })
        }


    });
