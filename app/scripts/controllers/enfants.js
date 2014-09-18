'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:EnfantsCtrl
 * @description
 * # EnfantsCtrl
 * Controller of the ecoleApp
 */
 angular.module('ecoleApp')
 .controller('EnfantsCtrl', function ($scope, enfantsService, $filter) {

 	$scope.setPage = function (pageNo) {
 		$scope.currentPage = pageNo;
 	};

 	$scope.pageChanged = function() {
 		getEntants () ;
 	};

 	$scope.init = function(){
	 	$scope.pagination = {};	
 		$scope.pagination.currentPage = 1 ;
 		$scope.pagination.rpp = 10 ;
 		$scope.search = '';
 		getEntants ();
 	}

 	$scope.recherche = function () {
 		getEntants();
 	}

 	$scope.deleteEnfant = function (enfant) {
 		enfantsService.delete({id: enfant.idEnfant}, function () {
 			getEntants ();
 		});
 	};

 	function getEntants (){
 		$scope.enfants = {};
 		$scope.enfants = enfantsService.query(
 			{page: $scope.pagination.currentPage,
 			rpp : $scope.pagination.rpp,
			search : $scope.search }
		);

 		$scope.enfants.$promise.then(function(data){
 			$scope.pagination.totalItems = data.total_items;
 		});
 	};

 	$scope.init();
 	
 });


