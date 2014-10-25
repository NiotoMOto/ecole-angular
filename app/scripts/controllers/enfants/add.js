'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:EnfantsAddCtrl
 * @description
 * # EnfantsAddCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
    .controller('EnfantsAddCtrl', function ($scope, $location, restService, userService, notificationservice) {
        var ressourceEnfant = restService.getRessource('enfant');

        $scope.addEnfant = function () {
          $scope.formEnfant.userIdUser = userService.user;
          ressourceEnfant.save(
          $scope.formEnfant,
          function (data) {
            $location.path('/enfant/' + data.idEnfant);
            notificationservice.add("Ajout enfant " + data.prenom + " " + data.nom, "success");
          });
        }

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
          return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.open = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          $scope.opened = true;
        };
    });
