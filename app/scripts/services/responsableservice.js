'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.responsableService
 * @description
 * # responsableService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
    .factory('responsableService', function responsableService($resource, apiService) {
        return $resource(apiService.url + '/responsable/:id', 
        	{id: '@id'},
        	{'update': { method: 'PUT' }}
    	);
    });
