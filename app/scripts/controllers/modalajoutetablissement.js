'use strict';
/**
 * @ngdoc function
 * @name ecoleApp.controller:ModalajoutetablissementCtrl
 * @description
 * # ModalajoutetablissementCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp').controller('ModalajoutetablissementCtrl', function($scope, etablissementService, $modalInstance, notificationservice) {
    $scope.addEtablissement = function(formEtablissement) {
        etablissementService.save(formEtablissement, function(data) {
            notificationservice.add('Ajout de l\'établissement ' + data.libelle, 'success');
            $modalInstance.close();
        });
    };
});