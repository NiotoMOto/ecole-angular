'use strict';

describe('Controller: SessionactiviteCtrl', function () {

  // load the controller's module
  beforeEach(module('ecoleApp'));

  var SessionactiviteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SessionactiviteCtrl = $controller('SessionactiviteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
