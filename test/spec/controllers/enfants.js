'use strict';

describe('Controller: EnfantsCtrl', function () {

  // load the controller's module
  beforeEach(module('ecoleApp'));

  var EnfantsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnfantsCtrl = $controller('EnfantsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
