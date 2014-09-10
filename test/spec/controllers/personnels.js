'use strict';

describe('Controller: PersonnelsCtrl', function () {

  // load the controller's module
  beforeEach(module('ecoleApp'));

  var PersonnelsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonnelsCtrl = $controller('PersonnelsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
