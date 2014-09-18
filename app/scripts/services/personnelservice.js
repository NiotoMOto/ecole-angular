'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.personnelService
 * @description
 * # personnelService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
    .factory('personnelService', function personnelService($resource, apiService) {
        return $resource(apiService.url + '/personnel/:id?page=:page&rpp=:rpp&search=:search', 
        	 {
        		id: '@id',
        		page: '@page',
        		rpp: '@rpp',
                search: '@search'
    		},
	    	{
                'update': { method: 'PUT' },
                'query': { method: 'GET', isArray: false }
            }
    	);
    });
