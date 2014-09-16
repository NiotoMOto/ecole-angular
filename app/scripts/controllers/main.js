'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecoleApp
 */
 angular.module('ecoleApp')
 .controller('MainCtrl', function ($scope, userService, enfantsService) {
 	$scope.enfants = enfantsService.query(
 		{page: $scope.page },
 		{rpp : $scope.rpp }
 		);
 });
