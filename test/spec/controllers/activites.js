'use strict';

describe('Controller: ActivitesCtrl', function () {

  // load the controller's module
  beforeEach(module('ecoleApp'));

  var ActivitesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActivitesCtrl = $controller('ActivitesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
