'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.authInterceptor
 * @description
 * # authInterceptor
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
    .factory('authInterceptor', function ($rootScope, $q, $window, $location) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    // handle the case where the user is not authenticated
                    $location.path('/');
                }
                return response || $q.when(response);
            },
            responseError: function (rejection) {
                if (rejection.status === 401) {
                    $location.path('/login').search('returnTo', $location.path());
                }else{
                     $location.path('/404').search('returnTo', $location.path());
                }
                return $q.reject(rejection);
            }
        };
    });
