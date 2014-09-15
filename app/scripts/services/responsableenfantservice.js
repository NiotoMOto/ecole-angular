'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.responsableEnfantService
 * @description
 * # responsableEnfantService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
    .factory('responsableEnfantService', function responsableEnfantService($resource, apiService) {
        return $resource(apiService.url + '/responsableEnfant/:id', {id: '@id'});
    });
