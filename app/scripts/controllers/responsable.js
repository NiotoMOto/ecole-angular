'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ResponsableCtrl
 * @description
 * # ResponsableCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
    .controller('ResponsableCtrl', function ($scope, $routeParams, responsableService) {
        var id = $routeParams.id;
        $scope.dataLoaded = false ;
        $scope.responsable = responsableService.get({id: id});

        $scope.responsable.$promise.then(function(){
        	$scope.dataLoaded = true ;
        })

        $scope.updateResponsable = function () {
            responsableService.update($scope.responsable);
        };
    });
