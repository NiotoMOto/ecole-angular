'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:ModalajoutresponsableCtrl
 * @description
 * # ModalajoutresponsableCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('ModalajoutresponsableCtrl', function ($scope, responsableService, notificationservice, $modalInstance) {
  	        $scope.addResponsable = function (formResponsable) {
            responsableService.save(
                formResponsable,
                function (data) {
                    notificationservice.add("Ajout personnel " + data.prenom + " " + data.nom, "success");
                    $modalInstance.close();
                })
        }

  });
