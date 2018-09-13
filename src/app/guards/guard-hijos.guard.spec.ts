import { TestBed, async, inject } from '@angular/core/testing';

import { GuardHIjosGuard } from './guard-hijos.guard';

describe('GuardHIjosGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardHIjosGuard]
    });
  });

  it('should ...', inject([GuardHIjosGuard], (guard: GuardHIjosGuard) => {
    expect(guard).toBeTruthy();
  }));
});
