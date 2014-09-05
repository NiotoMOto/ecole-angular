'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.responsableEnfantService
 * @description
 * # responsableEnfantService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
   .factory('responsableEnfantService', function responsableEnfantService($resource) {
    return $resource('http://localhost:8084/ecole/responsableEnfant/:id', {id:'@id'} );
  });
