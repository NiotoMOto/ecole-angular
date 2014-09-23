'use strict';

describe('Controller: ModalajoutresponsableCtrl', function () {

  // load the controller's module
  beforeEach(module('ecoleApp'));

  var ModalajoutresponsableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalajoutresponsableCtrl = $controller('ModalajoutresponsableCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
