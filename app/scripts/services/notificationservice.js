'use strict';

/**
 * @ngdoc service
 * @name ecoleApp.notificationservice
 * @description
 * # notificationservice
 * Service in the ecoleApp.
 */ 
 angular.module('ecoleApp')
 .factory('notificationservice', function notificationservice ( $rootScope){
 	var notification = [];
 	return {	
 		add : function (text, type) {
 			var message = {};
 			message.type = type ;
 			message.text = text ;
 			notification.push(message);
 		},
 		remove : function (index) {
 			notification.splice(index, 1);
 		},
 		getMessages : function (argument) {
 			return notification ;
 		}
 	}
 });
