'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ResponsableCtrl
 * @description
 * # ResponsableCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
    .controller('ResponsableCtrl', function($scope, $routeParams, restService) {
        var ressourcePersonnel = restService.getRessource('responsable');

        var id = $routeParams.id;
        $scope.dataLoaded = false;
        $scope.responsable = ressourcePersonnel.get({
            id: id
        });

        $scope.responsable.$promise.then(function() {
            $scope.dataLoaded = true;
        });

        $scope.updateResponsable = function() {
            ressourcePersonnel.update($scope.responsable);
        };
    });