'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:MaincontrollerCtrl
 * @description
 * # MaincontrollerCtrl
 * Controller of the ecoleApp
 */
 angular.module('ecoleApp')
 .controller('MaincontrollerCtrl', function ($scope, userService, $location, $route) {
 	function successLogout() {
 		$location.path('login');
 	}

 	$scope.logout = function () {
 		userService.logout()
 		.success(successLogout);
 	};

 	$scope.isActive = function(route) {
 		return route.indexOf($location.path()) != -1;
 		
 	}

 });
