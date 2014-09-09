'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.userService
 * @description
 * # userService
 * Service in the ecoleApp.
 */
angular.module('ecoleApp')
  .factory('userService', function userService($http, $window, $cookies, $cookieStore) {
  	return{
  		user : {
  			idUser : '1'
  		},
  		login : function(){
  			$http.post(
  				'http://localhost:8084/ecole/login?username=antoine&password=antoine',
  				{username : 'antoine', password : 'antoine'},
  				 {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
  				)
  			.success(
  				function(data){
  					 $window.sessionStorage.token = data.JSESSIONID;
  					 console.log("TOKEN : " + $cookieStore.get('JSESSIONID'));
  				});
  		}
    };
  });
  	
