'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.personnelService
 * @description
 * # personnelService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
    .factory('personnelService', function personnelService($resource) {
        return $resource('http://localhost:8084/ecole/personnel/:id', 
        	{id: '@id'},
	    	{'update': { method: 'PUT' }}
    	);
    });
