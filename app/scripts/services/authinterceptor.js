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
                console.log("response : " + response.status);
                if (response.status === 401) {
                    // handle the case where the user is not authenticated
                    $location.path("/")
                }
                return response || $q.when(response);
            },
            responseError: function (rejection) {
                if (rejection.status === 401) {
                    console.log("Response Error 401", rejection);
                    $location.path('/login').search('returnTo', $location.path());
                }
                return $q.reject(rejection);
            }
        };
    });
