'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:EnfantsCtrl
 * @description
 * # EnfantsCtrl
 * Controller of the ecoleApp
 */
 angular.module('ecoleApp')
 .controller('EnfantsCtrl', function ($scope, enfantsService) {
 	
 	$scope.init = function(){
 		$scope.page = 1 ;
 		$scope.rpp = 500 ;
 		getEntants ();
 	}

 	$scope.deleteEnfant = function (enfant) {
 		enfantsService.delete({id: enfant.idEnfant}, function () {
 			getEntants ();
 		});
 	};

 	$scope.pageSuivante = function () {
 		$scope.page ++ ;
 		getEntants ();
 	};


 	$scope.pagePrecedente = function () {
 		$scope.page -- ;
 		getEntants ();
 	};

 	function getEntants (){
 		$scope.enfants = {};
 		$scope.enfants = enfantsService.query(
 			{page: $scope.page },
 			{rpp : $scope.rpp });
 	};

 	$scope.init();
 	
 });


