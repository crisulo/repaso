import { TestBed, inject } from '@angular/core/testing';

import { ResponseServiceService } from './response-service.service';

describe('ResponseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponseServiceService]
    });
  });

  it('should be created', inject([ResponseServiceService], (service: ResponseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
