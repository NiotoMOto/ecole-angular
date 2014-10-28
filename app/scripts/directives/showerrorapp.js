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
			},
			start : function() {
				$interval(function() {
					console.log('toto');
					if(notification.length > 0)
						notification.pop();
				}, 5000);
			}
		};
	});
