'use strict';

/**
 * @ngdoc directive
 * @name ecoleApp.directive:editField
 * @description
 * # editField
 */
 angular.module('ecoleApp')
 .directive('editField', function () {
    return {
        restrict: 'C',
        scope: {
            field: '=',
            updateMethod: '&',
            type: '@editType'
        },
        link: function postLink(scope, element) {
            var type = scope.type || 'text' ;
            var value = scope.field || '' ;
           element.editable({
            text : 'EMPTY',
            value: value,
            type: scope.type,
            success: function (response, nvValue) {
                scope.$apply(function () {
                    scope.field = nvValue;   
                });
                scope.updateMethod();   
            }
        });
           scope.$watch('field', function (newval, oldvalue) {
            if (newval !== oldvalue) {
                var value = scope.field;
                element.editable({
                    value: value,
                    success: function (response, nvValue) {
                        scope.$apply(function () {
                            scope.field = nvValue;   
                        });
                        scope.updateMethod();   
                    }
                });
            }
        });
       }
   };
});
