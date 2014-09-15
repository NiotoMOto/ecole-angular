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
                updateMethod: '&'
            },
            link: function postLink(scope, element) {
                scope.$watch('field', function (newval, oldvalue) {
                    if (newval != oldvalue) {
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
