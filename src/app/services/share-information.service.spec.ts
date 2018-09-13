import { TestBed, inject } from '@angular/core/testing';

import { ShareInformationService } from './share-information.service';

describe('ShareInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareInformationService]
    });
  });

  it('should be created', inject([ShareInformationService], (service: ShareInformationService) => {
    expect(service).toBeTruthy();
  }));
});
