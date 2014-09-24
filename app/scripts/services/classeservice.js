  'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.classeService
 * @description
 * # classeService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
    .factory('classeService', function classeService($resource, apiService) {
        return $resource(apiService.url + '/classe/:id', {id: '@id'});
    });

