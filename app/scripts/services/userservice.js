'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.userService
 * @description
 * # userService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
    .factory('userService', function userService($http, $window, $cookies, $cookieStore) {
        return{
            user: {
                idUser: '1'
            },
            login: function (user) {
                return $http.post(
                        'http://localhost:8084/ecole/login?username=' + user.username + '&password=' + user.password,
                    {},
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                );
            },
            logout: function () {
                return $http.post("http://localhost:8084/ecole/logout");
            }
        };
    });
  	
