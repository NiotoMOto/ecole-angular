'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:EnfantsCtrl
 * @description
 * # EnfantsCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
    .controller('EnfantsCtrl', function ($scope, enfantsService) {

        $scope.deleteEnfant = function (enfant) {
            enfantsService.delete({id: enfant.idEnfant}, function () {
                $scope.enfants = enfantsService.query();
            });
        };
        $scope.enfants = enfantsService.query();

    });


