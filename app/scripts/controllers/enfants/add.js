'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:EnfantsAddCtrl
 * @description
 * # EnfantsAddCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
    .controller('EnfantsAddCtrl', function ($scope, $location, enfantsService, userService, notificationservice) {
        $scope.addEnfant = function () {
            $scope.formEnfant.userIdUser = userService.user;
            enfantsService.save(
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
