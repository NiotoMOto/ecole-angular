'use strict';

describe('Controller: ResponsablesAddCtrl', function () {

  // load the controller's module
  beforeEach(module('ecoleApp'));

  var ResponsablesAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResponsablesAddCtrl = $controller('ResponsablesAddCtrl', {
      $scope: scope
    });
  }));

});
