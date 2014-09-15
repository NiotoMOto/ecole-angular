'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.apiService
 * @description
 * # apiService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
  .factory('apiService', function apiService() {
    return{
    	url : 'http://localhost:8080/ecole'
    };
  });
