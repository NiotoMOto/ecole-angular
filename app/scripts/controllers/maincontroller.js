'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:MaincontrollerCtrl
 * @description
 * # MaincontrollerCtrl
 * Controller of the ecoleApp
 */
 angular.module('ecoleApp')
 .controller('MaincontrollerCtrl', function ($scope, userService, notificationservice, $location, $route) {

 	$scope.notificationservice = notificationservice ;
 	$scope.isLogged = userService.isLogged ;
 	$scope.userService = userService ;
 	
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
