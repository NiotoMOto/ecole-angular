'use strict';

describe('Directive: editField', function () {

  // load the directive's module
  beforeEach(module('ecoleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<edit-field></edit-field>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the editField directive');
  }));
});
