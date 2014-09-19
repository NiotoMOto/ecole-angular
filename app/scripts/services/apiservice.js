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
    	url : 'http://srv.elgis.fr:8080/ecole'
    	//url : 'http://localhost:8084/ecole'
    };
  });
