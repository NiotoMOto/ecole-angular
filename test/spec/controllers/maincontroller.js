'use strict';

describe('Controller: MaincontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('ecoleApp'));

  var MaincontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaincontrollerCtrl = $controller('MaincontrollerCtrl', {
      $scope: scope
    });
  }));


});
