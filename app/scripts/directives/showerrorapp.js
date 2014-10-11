'use strict';

/**
 * @ngdoc directive
 * @name ecoleApp.directive:showErrorApp
 * @description
 * # showErrorApp
 */
angular.module('ecoleApp')
	.directive('showErrorApp', function() {
		return {
			templateUrl: 'views/template/notification.html',
			restrict: 'E',
			scope: {
				messsage: '=',
				messages: '=messages'
			},
			link: function postLink(scope) {
				scope.removeNotif = function(index) {
					scope.messages.splice(index, 1);
				}
			}
		};
	});