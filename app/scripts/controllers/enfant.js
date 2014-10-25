'use strict';
/**
 * @ngdoc function
 * @name ecoleApp.controller:EnfantCtrl
 * @description
 * # EnfantCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp').controller('EnfantCtrl', function($scope, $routeParams, $modal, restService, notificationservice) {
    var idEnfant = $routeParams.id;
    var modalInstance;
    $scope.dataLoaded = false;
    var ressourceEnfant = restService.getRessource('enfant');
    var ressourceAnneeScolaire = restService.getRessource('anneeScolaire');
    var ressourceResponsable = restService.getRessource('responsable');
    var ressourceTypeResponsable = restService.getRessource('typeResponsable');
    var ressourceAnneeScolaireEnfant = restService.getRessource('anneeScolaireEnfant');
    var ressourceEtablissementScolaire = restService.getRessource('etablissement');
    var ressourceClasseScolaire = restService.getRessource('classe');
    var ressourceresponsableEnfant = restService.getRessource('responsableEnfant');


    function getResponsables(){
        ressourceResponsable.query({
            all: 'true'
        }).$promise.then(function(data){
            $scope.responsables = data;
        });
    }

    $scope.init = function() {
        $scope.showNewAnnee = false;
        ressourceEnfant.get({
            id: idEnfant
        }).$promise.then(function(data) {
            $scope.enfant = data ;
            $scope.dataLoaded = true;
        });
        $scope.predicate = '-idanneeScolaire.libelle';
        getResponsables();
        $scope.typeResponsables = ressourceTypeResponsable.query();
        reloadResponsablesEnfant();
        $scope.classesEcole = ressourceClasseScolaire.query();
        $scope.annees = ressourceAnneeScolaire.query();
        reloadAnneeEnfant();
        reloadEtablissement();
    };

    function reloadEtablissement() {
        ressourceEtablissementScolaire.query().$promise.then(function(data){
            $scope.etablissements = data;
        });
    }
    $scope.deleteResponsableEnfant = function(responsableEnfant) {
        ressourceresponsableEnfant.delete({
            id: responsableEnfant.idresponsableEnfant
        }, function() {
            reloadResponsablesEnfant();
            notificationservice.add('Responsable enlevé ( ' + responsableEnfant.idresponsable.prenom + ' ' + responsableEnfant.idresponsable.nom + ' ) de l\'enfant : ' + $scope.enfant.prenom + ' ' + $scope.enfant.prenom, 'warning');
        });
    };

    function reloadResponsablesEnfant() {
        ressourceresponsableEnfant.query({
            byEnfant: idEnfant
        }).$promise.then(function(data){
            $scope.responsableEnfants = data.items;
        });
    }

    function reloadAnneeEnfant() {
        ressourceAnneeScolaireEnfant.query({
            byEnfant : idEnfant
        }).$promise.then(function(data){
            $scope.anneesEnfant = data ;
        });
    }
    $scope.updateEnfant = function() {
        ressourceEnfant.update($scope.enfant);
    };
    $scope.openResponsableModal = function() {
        modalInstance = $modal.open({
            templateUrl: 'views/template/formresponsable.html',
            controller: 'ModalajoutresponsableCtrl'
        });
        modalInstance.result.then(function() {
            getResponsables();
        });
    };
    $scope.ajoutResponsableEnfant = function() {
        var responsableEnfant = {};
        responsableEnfant.idresponsable = $scope.responsable;
        responsableEnfant.idenfant = $scope.enfant;
        responsableEnfant.idtypeResponsable = $scope.typeResponsable;
        ressourceresponsableEnfant.save(responsableEnfant, function() {
            reloadResponsablesEnfant();
        });
    };
    $scope.openEtablissementModal = function() {
        modalInstance = $modal.open({
            templateUrl: 'views/template/formetablissement.html',
            controller: 'ModalajoutetablissementCtrl'
        });
        modalInstance.result.then(function() {
            reloadEtablissement();
        });
    };

    $scope.deleteAnneeEnfant = function(anneeEnfant) {
        ressourceAnneeScolaireEnfant.delete({
            id: anneeEnfant.idanneeScolaireEnfant
        }, function() {
            reloadAnneeEnfant();
            notificationservice.add('Année scolaire enlevé pour l\'enfant ' + anneeEnfant.idenfant.prenom + ' ' + anneeEnfant.idenfant.nom, 'warning');
        });
    };
    $scope.ajoutAnneEnfant = function() {
        var anneeEnfant = {};
        anneeEnfant.idetablissement = $scope.newAnnee.etablissement;
        anneeEnfant.idenfant = $scope.enfant;
        anneeEnfant.idanneeScolaire = $scope.newAnnee.annee;
        anneeEnfant.idClasse = $scope.newAnnee.classe;
        ressourceAnneeScolaireEnfant.save(anneeEnfant, function() {
            reloadAnneeEnfant();
        });
    };
    $scope.init();
});