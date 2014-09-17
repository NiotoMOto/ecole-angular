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
        return $resource(apiService.url + '/responsable/:id?page=:page&rpp=:rpp&search=:search', 
        	 {
        		id: '@id',
        		page: '@page',
        		rpp: '@rpp',
                search: '@search'
    		},
        	{'update': { method: 'PUT' }}
    	);
    });
