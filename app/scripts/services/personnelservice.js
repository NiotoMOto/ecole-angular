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
        return $resource(apiService.url + '/personnel/:id', 
        	{id: '@id'},
	    	{'update': { method: 'PUT' }}
    	);
    });
