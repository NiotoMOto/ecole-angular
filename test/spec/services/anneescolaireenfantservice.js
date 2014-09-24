'use strict';

describe('Service: anneeScolaireEnfantService', function () {

  // load the service's module
  beforeEach(module('ecoleApp'));

  // instantiate service
  var anneeScolaireEnfantService;
  beforeEach(inject(function (_anneeScolaireEnfantService_) {
    anneeScolaireEnfantService = _anneeScolaireEnfantService_;
  }));

  it('should do something', function () {
    expect(!!anneeScolaireEnfantService).toBe(true);
  });

});
