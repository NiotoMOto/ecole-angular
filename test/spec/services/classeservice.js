'use strict';

describe('Service: classeService', function () {

  // load the service's module
  beforeEach(module('ecoleApp'));

  // instantiate service
  var classeService;
  beforeEach(inject(function (_classeService_) {
    classeService = _classeService_;
  }));

  it('should do something', function () {
    expect(!!classeService).toBe(true);
  });

});
