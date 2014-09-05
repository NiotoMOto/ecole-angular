'use strict';

describe('Service: typeResponsableService', function () {

  // load the service's module
  beforeEach(module('ecoleApp'));

  // instantiate service
  var typeResponsableService;
  beforeEach(inject(function (_typeResponsableService_) {
    typeResponsableService = _typeResponsableService_;
  }));

  it('should do something', function () {
    expect(!!typeResponsableService).toBe(true);
  });

});
