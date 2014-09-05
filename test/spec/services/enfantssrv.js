'use strict';

describe('Service: enfantsSrv', function () {

  // load the service's module
  beforeEach(module('ecoleApp'));

  // instantiate service
  var enfantsSrv;
  beforeEach(inject(function (_enfantsSrv_) {
    enfantsSrv = _enfantsSrv_;
  }));

  it('should do something', function () {
    expect(!!enfantsSrv).toBe(true);
  });

});
