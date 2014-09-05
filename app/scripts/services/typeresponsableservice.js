'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.typeResponsableService
 * @description
 * # typeResponsableService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
  .factory('typeResponsableService', function typeResponsableService($resource) {
    return $resource('http://localhost:8084/ecole/typeResponsable/:id', {id:'@id'} );
  });
