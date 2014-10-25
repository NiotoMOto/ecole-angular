'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:EnfantsCtrl
 * @description
 * # EnfantsCtrl
 * Controller of the ecoleApp
 */
 angular.module('ecoleApp')
 .controller('EnfantsCtrl', function ($scope, $rootScope, restService,  $filter, notificationservice) {
 	var ressourceEnfant = restService.getRessource('enfant');

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
 	};

 	$scope.recherche = function () {
 		getEntants();
 	};



 	$scope.deleteEnfant = function (enfant) {
 		ressourceEnfant.delete({id: enfant.idEnfant}, function () {
 			getEntants ();
 			notificationservice.add('Suppression enfant', 'warning');
 		});
 	};

 	function getEntants (){
 		$scope.enfants = {};
 		ressourceEnfant.query(
 			{
				page: $scope.pagination.currentPage,
 				rpp : $scope.pagination.rpp,
				search : $scope.search 
			}
		).$promise.then(function(data){
			$scope.enfants = data;
			$scope.pagination.totalItems = data.total_items;
		});

 	};

 	$scope.init();
 	
 });


