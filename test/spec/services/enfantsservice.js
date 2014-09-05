'use strict';

describe('Service: enfantsService', function () {

  // load the service's module
  beforeEach(module('ecoleApp'));

  // instantiate service
  var enfantsService;
  beforeEach(inject(function (_enfantsService_) {
    enfantsService = _enfantsService_;
  }));

  it('should do something', function () {
    expect(!!enfantsService).toBe(true);
  });

});
