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
      console.log("request");
      if ($window.sessionStorage.token) {
        config.headers.Authorization = $window.sessionStorage.token;
      }
      return config;
    },
    response: function (response) {
    	console.log("response : " + response );
      if (response.status === 401) {
        // handle the case where the user is not authenticated
        $location.path("/")
      }
      return response || $q.when(response);
    }
  };
});
