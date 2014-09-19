'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.authInterceptor
 * @description
 * # authInterceptor
 * Service in the ecoleApp.
 */
 angular.module('ecoleApp')
 .factory('authInterceptor', function ($rootScope, $q, $window, $location, notificationservice) {
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
            console.log("HTTP : " + rejection.status);
            switch(rejection.status){
                case 401 :
                $location.path('/login').search('returnTo', $location.path());
                break;
                case 500 :
                notificationservice.add("Erreur système opération impossible", "danger");
                break;
                default:
                notificationservice.add("Erreur système opération impossible", "danger");
            }

           return $q.reject(rejection);
       }
       };
   });
