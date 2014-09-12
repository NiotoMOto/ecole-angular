'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.responsableService
 * @description
 * # responsableService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
    .factory('responsableService', function responsableService($resource) {
        return $resource('http://localhost:8084/ecole/responsable/:id', {id: '@id'});
    });
