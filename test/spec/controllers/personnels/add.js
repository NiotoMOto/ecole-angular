'use strict';

describe('Controller: PersonnelsAddCtrl', function () {

  // load the controller's module
  beforeEach(module('ecoleApp'));

  var PersonnelsAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonnelsAddCtrl = $controller('PersonnelsAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
