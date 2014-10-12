'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.restService
 * @description
 * # restService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
	.service('restService', function restService($resource, apiService) {
		return {
			getRessource : function(shema){
				return $resource(apiService.url + '/'+shema+'/:id?page=:page&rpp=:rpp&search=:search', 
				{
					id: '@id',
					page: '@page',
					rpp: '@rpp',
					search: '@search'
				},
				{
					'update': { method: 'PUT' },
					'query': { method: 'GET', isArray: true }
				});
			}
		};
	});