'use strict';

describe('Service: anneeScolaireService', function () {

  // load the service's module
  beforeEach(module('ecoleApp'));

  // instantiate service
  var anneeScolaireService;
  beforeEach(inject(function (_anneeScolaireService_) {
    anneeScolaireService = _anneeScolaireService_;
  }));

  it('should do something', function () {
    expect(!!anneeScolaireService).toBe(true);
  });

});
