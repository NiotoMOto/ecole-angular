'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:PersonnelsCtrl
 * @description
 * # PersonnelsCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
    .controller('PersonnelsCtrl', function ($scope, personnelService) {
        $scope.personnels = personnelService.query();

        $scope.deletePersonnel = function (personnel) {
            personnelService.delete(
                {id: personnel.idpersonnel},
                function () {
                    $scope.personnels = personnelService.query();
                }
            );
        }
    });
