'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:MaincontrollerCtrl
 * @description
 * # MaincontrollerCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
    .controller('MaincontrollerCtrl', function ($scope, userService, $location) {
        function successLogout() {
            $location.path('login');
        };

        $scope.logout = function () {
            userService.logout()
                .success(successLogout);
        };
    });
