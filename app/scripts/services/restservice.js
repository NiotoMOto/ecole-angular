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
					age: '@page',
	        		rpp: '@rpp',
	                search: '@search'
				},
				{
					'update': {
						 method: 'PUT',
						 transformRequest : function(data){
				 			delete data.$promise;
							delete data.$resolved;
			 				return angular.toJson(data);
						 },

					},
					'get': {
					  method: 'get',
					  interceptor: {
					    response: function(response) {
					      delete response.$promise;
						  delete response.$resolved;
					      return response.data;
					    }
					  }
					},
					'query': { method: 'GET', isArray: false }
				});
			}
		};
	});