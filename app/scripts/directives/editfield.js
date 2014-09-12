'use strict';

/**
 * @ngdoc directive
 * @name ecoleApp.directive:editField
 * @description
 * # editField
 */
angular.module('ecoleApp')
    .directive('editField', function ($timeout) {
        return {
            restrict: 'C',
            template: '<span>{{text}}</span>',
            scope: {
                model: '=',
                field: '=',
                updateMethod: '&'
            },
            link: function postLink(scope, element, attrs) {
                scope.model.$promise
                    .then(function(data){
                        scope.model = data ;
          
                    })
                    .then(function(data){
                        element.editable({
                            value: scope.field,
                            success: function (response, nvValue) {
                                scope.field = nvValue;
                                scope.updateMethod();
                                        
                            }
                        });
                    })
          

            }
        };
    });
