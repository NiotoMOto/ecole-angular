'use strict';

describe('Controller: EnfantsAddCtrl', function () {

  // load the controller's module
  beforeEach(module('ecoleApp'));

  var EnfantsAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnfantsAddCtrl = $controller('EnfantsAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
