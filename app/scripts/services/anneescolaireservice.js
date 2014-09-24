'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.anneeScolaireService
 * @description
 * # anneeScolaireService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
    .factory('anneeScolaireService', function anneeScolaireService($resource, apiService) {
        return $resource(apiService.url + '/anneeScolaire/:id', {id: '@id'});
    });
