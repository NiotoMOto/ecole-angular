'use strict';

describe('Controller: ResponsablesCtrl', function () {

  // load the controller's module
  beforeEach(module('ecoleApp'));

  var ResponsablesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResponsablesCtrl = $controller('ResponsablesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
