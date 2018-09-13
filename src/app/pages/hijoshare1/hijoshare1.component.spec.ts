import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijoshare1Component } from './hijoshare1.component';

describe('Hijoshare1Component', () => {
  let component: Hijoshare1Component;
  let fixture: ComponentFixture<Hijoshare1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijoshare1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijoshare1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
