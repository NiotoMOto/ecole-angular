'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.userService
 * @description
 * # userService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
  .factory('userService', function userService() {
  	return{
  		user : {
  			idUser : '1'
  		}
    };
  });
  	
