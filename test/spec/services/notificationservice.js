'use strict';

describe('Service: notificationservice', function () {

  // load the service's module
  beforeEach(module('ecoleApp'));

  // instantiate service
  var notificationservice;
  beforeEach(inject(function (_notificationservice_) {
    notificationservice = _notificationservice_;
  }));

  it('should do something', function () {
    expect(!!notificationservice).toBe(true);
  });

});
