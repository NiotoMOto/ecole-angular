'use strict';

describe('Service: etablissementService', function () {

  // load the service's module
  beforeEach(module('ecoleApp'));

  // instantiate service
  var etablissementService;
  beforeEach(inject(function (_etablissementService_) {
    etablissementService = _etablissementService_;
  }));

  it('should do something', function () {
    expect(!!etablissementService).toBe(true);
  });

});
