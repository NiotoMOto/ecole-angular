'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:InscriptionCtrl
 * @description
 * # InscriptionCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
    .controller('InscriptionCtrl', function($scope, $routeParams, restService, notificationservice) {
        var ressourceInscription = restService.getRessource('inscription');
        var ressourceEnfant = restService.getRessource('enfant');
        var ressourceEnfantSession = restService.getRessource('enfantSession');
        var idInscription = $routeParams.id;
        $scope.enfant = {};

        $scope.init = function() {
            $scope.dataLoaded = false;
            ressourceInscription.get({
                id: idInscription
            }).$promise.then(function(data) {
                $scope.inscription = data;
                $scope.dataLoaded = true;
            });
            $scope.refreshEnfant('');
            $scope.getEnfantInscrits();
        };

        $scope.getEnfantInscrits = function getEnfantInscrits() {
            ressourceEnfantSession.query({
                byInscription : idInscription
            }).$promise.then(function(data) {
                $scope.listEnfantsInscrits = data;
                console.log(data);
            })
        };

        $scope.inscriptionEnfant = function(){
            var sessionEnfant = {};
            sessionEnfant.idinscription = $scope.inscription;
            sessionEnfant.idenfant = $scope.enfant.selected ;

            ressourceEnfantSession.save(sessionEnfant).$promise.then(function(){
                $scope.getEnfantInscrits();
                notificationservice.add('Enfant inscrit', 'success');
            });
        };

        $scope.deleteEnfantSession = function(enfantSession){
            ressourceEnfantSession.delete({
                id : enfantSession.idenfantSession
            }).$promise.then(function(){
                $scope.getEnfantInscrits();
                notificationservice.add('Enfant désinscrit', 'warning');
            })
        };

        $scope.refreshEnfant = function(search) {
            ressourceEnfant.query({
                page: 1,
                rpp: 7,
                search: search
            }).$promise.then(function(data) {
                $scope.listEnfants = data;
            })
        }

        $scope.updateInscription = function() {
            ressourceInscription.update($scope.inscription);
        }
        $scope.init();
    });

