'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:EnfantsAddCtrl
 * @description
 * # EnfantsAddCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
    .controller('EnfantsAddCtrl', function ($scope, $location, enfantsService, userService, notificationservice) {
        $scope.addEnfant = function () {
            $scope.formEnfant.userIdUser = userService.user;
            enfantsService.save(
                $scope.formEnfant,
                function (data) {
                    $location.path('/enfant/' + data.idEnfant);
                    notificationservice.add("Ajout enfant " + data.prenom + " " + data.nom, "success");
                });
        }
    });
