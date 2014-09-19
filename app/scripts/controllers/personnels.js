'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:PersonnelsCtrl
 * @description
 * # PersonnelsCtrl
 * Controller of the ecoleApp
 */
 angular.module('ecoleApp')
 .controller('PersonnelsCtrl', function ($scope, personnelService, notificationservice ) {

    $scope.init = function(){
        $scope.pagination = {}; 
        $scope.pagination.currentPage = 1 ;
        $scope.pagination.rpp = 10 ;
        $scope.search = '';
        getPersonnels();
    }

    $scope.recherche = function () {
        getPersonnels();
    }

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        getPersonnels () ;
    };


    $scope.deletePersonnel = function (personnel) {
        personnelService.delete(
            {id: personnel.idpersonnel},
            function () {
                getPersonnels();
                notificationservice.add("Suppression personnel", "warning");
            }
            );
    };

    function getPersonnels(){
        $scope.personnels = {};
        $scope.personnels = personnelService.query(
        {
            page: $scope.pagination.currentPage,
            rpp : $scope.pagination.rpp,
            search : $scope.search 
        });

        $scope.personnels.$promise.then(function(data){
            $scope.pagination.totalItems = data.total_items;
        })
    }

    $scope.init();
});
