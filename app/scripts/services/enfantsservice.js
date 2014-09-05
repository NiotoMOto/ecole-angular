'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.enfantsService
 * @description
 * # enfantsService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
  .factory('enfantsService', function enfantsService($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
     return $resource('http://localhost:8084/ecole/enfant/:id', {id:'@id'} );
  });
