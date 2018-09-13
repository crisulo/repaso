import { TestBed, async, inject } from '@angular/core/testing';

import { ResolveServiceHijoGuard } from './resolve-service-hijo.guard';

describe('ResolveServiceHijoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveServiceHijoGuard]
    });
  });

  it('should ...', inject([ResolveServiceHijoGuard], (guard: ResolveServiceHijoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
