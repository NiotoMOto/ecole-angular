'use strict';
/**
 * @ngdoc function
 * @name ecoleApp.controller:ModalajoutetablissementCtrl
 * @description
 * # ModalajoutetablissementCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp').controller('ModalajoutetablissementCtrl', function($scope, restService, $modalInstance, notificationservice) {
	var ressourceEtablissementScolaire = restService.getRessource('etablissement');

    $scope.addEtablissement = function(formEtablissement) {
        ressourceEtablissementScolaire.save(formEtablissement, function(data) {
            notificationservice.add('Ajout de l\'établissement ' + data.libelle, 'success');
            $modalInstance.close();
        });
    };
});