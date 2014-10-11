'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.userService
 * @description
 * # userService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
    .factory('userService', function userService($http, $window, $cookies, $cookieStore, apiService) {
        return {
            user: {},
            isLogged: false,
            login: function(user) {
                this.isLogged = true;
                return $http.post(
                    apiService.url + '/login?username=' + user.username + '&password=' + user.password, {}, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }
                );
                
            },
            logout: function() {
                this.isLogged = false;
                return $http.post(apiService.url + '/logout');
            },
            getUser: function() {
                return $http.get(apiService.url + '/loginUser');
            }
        };
    });