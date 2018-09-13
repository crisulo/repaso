import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijoshare2Component } from './hijoshare2.component';

describe('Hijoshare2Component', () => {
  let component: Hijoshare2Component;
  let fixture: ComponentFixture<Hijoshare2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijoshare2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijoshare2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
