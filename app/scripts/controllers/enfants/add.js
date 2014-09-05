'use strict';

/**
 * @ngdoc function
 * @name ecoleApp.controller:EnfantsAddCtrl
 * @description
 * # EnfantsAddCtrl
 * Controller of the ecoleApp
 */
angular.module('ecoleApp')
  .controller('EnfantsAddCtrl', function ($scope, $location, enfantsService, userService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addEnfant = function(){
    	$scope.formEnfant.userIdUser = userService.user ;
    	enfantsService.save(
    		$scope.formEnfant,
    		function(data){
    			$location.path('/enfant/' + data.idEnfant);
    		});
    }
  });
