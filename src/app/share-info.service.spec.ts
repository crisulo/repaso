import { TestBed, inject } from '@angular/core/testing';

import { ShareInfoService } from './share-info.service';

describe('ShareInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareInfoService]
    });
  });

  it('should be created', inject([ShareInfoService], (service: ShareInfoService) => {
    expect(service).toBeTruthy();
  }));
});
