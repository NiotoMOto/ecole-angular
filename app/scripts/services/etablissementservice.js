  'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.etablissementService
 * @description
 * # etablissementService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
    .factory('etablissementService', function etablissementService($resource, apiService) {
        return $resource(apiService.url + '/etablissement/:id', {id: '@id'});
    });

