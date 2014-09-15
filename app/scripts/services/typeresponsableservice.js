'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.typeResponsableService
 * @description
 * # typeResponsableService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
    .factory('typeResponsableService', function typeResponsableService($resource, apiService) {
        return $resource(apiService.url + '/typeResponsable/:id', {id: '@id'});
    });
