'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ResponsablesCtrl
 * @description
 * # ResponsablesCtrl
 * Controller of the ecoleApp
 */
 angular.module('ecoleApp')
 .controller('ResponsablesCtrl', function ($scope, responsableService, notificationservice) {


    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        getResponsables () ;
    };

    $scope.recherche = function () {
        getResponsables();
    }

    $scope.init = function(){
        $scope.pagination = {}; 
        $scope.pagination.currentPage = 1 ;
        $scope.pagination.rpp = 10 ;
        $scope.search = '';
        getResponsables();
    }

    $scope.deleteResponsable = function (responsable) {
        responsableService.delete(
            {id: responsable.idresponsable},
            function () {
                getResponsables();
                notificationservice.add("Suppression responsable", "warning");
            });

    };

    function getResponsables() {
        $scope.responsables = {};
        $scope.responsables = responsableService.query(
            {page: $scope.pagination.currentPage,
                rpp : $scope.pagination.rpp,
                search : $scope.search }
                );

        $scope.responsables.$promise.then(function(data){
            $scope.pagination.totalItems = data.total_items;
        });
    };

    $scope.init();
});
