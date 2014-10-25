'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ModalajoutresponsableCtrl
 * @description
 * # ModalajoutresponsableCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('ModalajoutresponsableCtrl', function ($scope, restService, notificationservice, $modalInstance) {
            var ressourceResponsable = restService.getRessource('responsable');
  	        $scope.addResponsable = function (formResponsable) {
            ressourceResponsable.save(
                formResponsable,
                function (data) {
                    notificationservice.add('Ajout personnel ' + data.prenom + ' ' + data.nom, 'success');
                    $modalInstance.close();
                });
        };

  });
