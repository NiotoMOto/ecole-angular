'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
    .controller('LoginCtrl', function ($scope, userService, $location) {
        $scope.formLogin = {};
        $scope.errors = '';

        userService.user = {};
        userService.isLogged = false ;

        function successLogin(user) {
            userService.isLogged = true ;
            userService.getUser().success(function(user){
                userService.user = user ;
            });
            $location.path('/main');
        }

        function errorLogin() {
            $scope.errors = 'Mauvais identifiants';
        }

        $scope.login = function (user) {
            $scope.errors = '';
            userService.login(user)
                .success(successLogin)
                .error(errorLogin);
        };

    });
