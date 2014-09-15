'use strict';

describe('Controller: EnfantCtrl', function () {

  // load the controller's module
  beforeEach(module('ecoleApp'));

  var EnfantCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnfantCtrl = $controller('EnfantCtrl', {
      $scope: scope
    });
  }));


});
