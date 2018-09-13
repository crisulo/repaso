import { TestBed, async, inject } from '@angular/core/testing';

import { ResolveServiceGuard } from './resolve-service.guard';

describe('ResolveServiceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveServiceGuard]
    });
  });

  it('should ...', inject([ResolveServiceGuard], (guard: ResolveServiceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
