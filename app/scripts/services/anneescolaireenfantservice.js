'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.anneeScolaireEnfantService
 * @description
 * # anneeScolaireEnfantService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
    .factory('anneeScolaireEnfantService', function anneeScolaireEnfantService($resource, apiService) {
        return $resource(apiService.url + '/anneeScolaireEnfant/:id', {id: '@id'});
    });
