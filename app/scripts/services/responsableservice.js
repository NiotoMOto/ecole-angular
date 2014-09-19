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
        return $resource(apiService.url + '/responsable/:id?page=:page&rpp=:rpp&search=:search&all=:all', 
        	 {
        		id: '@id',
        		page: '@page',
        		rpp: '@rpp',
                search: '@search',
                all: '@all'
    		},
        	{
                'update': { method: 'PUT' },
                'query': { method: 'GET', isArray: false }
            }
    	);
    });
