'use strict';
/**
 * @ngdoc function
 * @name ecoleApp.controller:EnfantCtrl
 * @description
 * # EnfantCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp').controller('EnfantCtrl', function($scope, $routeParams, $modal, enfantsService, responsableService, typeResponsableService, responsableEnfantService, notificationservice, anneeScolaireEnfantService, etablissementService, classeService, anneeScolaireService) {
    var idEnfant = $routeParams.id;
    var modalInstance;
    $scope.dataLoaded = false;
    $scope.init = function() {
        $scope.showNewAnnee = false;
        $scope.enfant = enfantsService.get({
            id: idEnfant
        });
        $scope.enfant.$promise.then(function() {
            $scope.dataLoaded = true;
        })
        $scope.predicate = '-idanneeScolaire.libelle';
        $scope.responsables = responsableService.query({
            all: "true"
        });
        $scope.typeResponsables = typeResponsableService.query();
        reloadResponsablesEnfant();
        $scope.classesEcole = classeService.query();
        $scope.annees = anneeScolaireService.query();
        reloadAnneeEnfant();
        reloadEtablissement();
    }

    function reloadEtablissement() {
        $scope.etablissements = etablissementService.query();
    }
    $scope.deleteResponsableEnfant = function(responsableEnfant) {
        responsableEnfantService.delete({
            id: responsableEnfant.idresponsableEnfant
        }, function() {
            reloadResponsablesEnfant();
            notificationservice.add("Responsable enlevé ( " + responsableEnfant.idresponsable.prenom + " " + responsableEnfant.idresponsable.nom + " ) de l'enfant : " + $scope.enfant.prenom + " " + $scope.enfant.prenom, "warning");
        });
    }

    function reloadResponsablesEnfant() {
        $scope.responsableEnfants = responsableEnfantService.query({
            byEnfant: idEnfant
        });
    }

    function reloadAnneeEnfant() {
        $scope.anneesEnfant = anneeScolaireEnfantService.query();
    }
    $scope.updateEnfant = function() {
        enfantsService.update($scope.enfant);
    };
    $scope.openResponsableModal = function() {
        modalInstance = $modal.open({
            templateUrl: 'views/template/formresponsable.html',
            controller: 'ModalajoutresponsableCtrl'
        });
        modalInstance.result.then(function() {
            $scope.responsables = responsableService.query({
                all: "true"
            });
        });
    }
    $scope.ajoutResponsableEnfant = function() {
        var responsableEnfant = {};
        responsableEnfant.idresponsable = $scope.responsable;
        responsableEnfant.idenfant = $scope.enfant;
        responsableEnfant.idtypeResponsable = $scope.typeResponsable;
        responsableEnfantService.save(responsableEnfant, function() {
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
    }
    $scope.deleteAnneeEnfant = function(anneeEnfant) {
        anneeScolaireEnfantService.delete({
            id: anneeEnfant.idanneeScolaireEnfant
        }, function() {
            reloadAnneeEnfant();
            notificationservice.add("Année scolaire enlevé pour l'enfant " + anneeEnfant.idenfant.prenom + " " + anneeEnfant.idenfant.nom, "warning");
        });
    };
    $scope.ajoutAnneEnfant = function() {
        var anneeEnfant = {};
        anneeEnfant.idetablissement = $scope.newAnnee.etablissement;
        anneeEnfant.idenfant = $scope.enfant;
        anneeEnfant.idanneeScolaire = $scope.newAnnee.annee;
        anneeEnfant.idClasse = $scope.newAnnee.classe;
        anneeScolaireEnfantService.save(anneeEnfant, function() {
            reloadAnneeEnfant();
        });
    };
    $scope.init();
});