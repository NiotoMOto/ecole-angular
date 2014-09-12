'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ResponsablesCtrl
 * @description
 * # ResponsablesCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
    .controller('ResponsablesCtrl', function ($scope, responsableService) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.responsables = responsableService.query();

        $scope.deleteResponsable = function (responsable) {
            responsableService.delete(
                {id: responsable.idresponsable},
                function (data) {
                    $scope.responsables = responsableService.query();
                })

        }
    });
