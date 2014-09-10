'use strict';

describe('Service: personnelService', function () {

  // load the service's module
  beforeEach(module('ecoleApp'));

  // instantiate service
  var personnelService;
  beforeEach(inject(function (_personnelService_) {
    personnelService = _personnelService_;
  }));

  it('should do something', function () {
    expect(!!personnelService).toBe(true);
  });

});
