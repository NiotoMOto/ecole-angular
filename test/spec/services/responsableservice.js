'use strict';

describe('Service: responsableService', function () {

  // load the service's module
  beforeEach(module('ecoleApp'));

  // instantiate service
  var responsableService;
  beforeEach(inject(function (_responsableService_) {
    responsableService = _responsableService_;
  }));

  it('should do something', function () {
    expect(!!responsableService).toBe(true);
  });

});
