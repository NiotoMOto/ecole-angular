'use strict';

describe('Controller: ResponsableCtrl', function () {

  // load the controller's module
  beforeEach(module('ecoleApp'));

  var ResponsableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResponsableCtrl = $controller('ResponsableCtrl', {
      $scope: scope
    });
  }));


});
