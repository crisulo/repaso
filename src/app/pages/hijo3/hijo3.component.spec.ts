import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo3Component } from './hijo3.component';

describe('Hijo3Component', () => {
  let component: Hijo3Component;
  let fixture: ComponentFixture<Hijo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
