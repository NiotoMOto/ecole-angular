'use strict';

/**
 * @ngdoc directive
 * @name ecoleApp.directive:showErrorApp
 * @description
 * # showErrorApp
 */
 angular.module('ecoleApp')
 .directive('showErrorApp', function ($rootScope) {
 	return {
 		templateUrl: 'views/template/notification.html',
 		restrict: 'E',
 		scope : {
 			messsage : '=',
 			messages : '=messages'
 		},
 		link: function postLink(scope, element, attrs) {
 			scope.removeNotif = function(index){
 				scope.messages.splice(index,1);
 			}
 		}
 	};
 });

 
