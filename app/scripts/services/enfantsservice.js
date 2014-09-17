'use strict';


/**
 * @ngdoc service
 * @name ecoleApp.enfantsService
 * @description
 * # enfantsService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
    .factory('enfantsService', function enfantsService($resource, apiService) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        return $resource(
            apiService.url + '/enfant/:id?page=:page&rpp=:rpp&search=:search', 
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
