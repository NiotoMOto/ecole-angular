'use strict';

describe('Service: responsableEnfantService', function () {

  // load the service's module
  beforeEach(module('ecoleApp'));

  // instantiate service
  var responsableEnfantService;
  beforeEach(inject(function (_responsableEnfantService_) {
    responsableEnfantService = _responsableEnfantService_;
  }));

  it('should do something', function () {
    expect(!!responsableEnfantService).toBe(true);
  });

});
