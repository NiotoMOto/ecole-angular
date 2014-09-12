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
            scope: {
                field: '=',
                updateMethod: '&'
            },
            link: function postLink(scope, element, attrs) {

            scope.$watch('field', function (newval, oldval) {
                if (newval) {
                    element.editable({
                    value: scope.field,
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
