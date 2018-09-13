import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsOpcionalesComponent } from './params-opcionales.component';

describe('ParamsOpcionalesComponent', () => {
  let component: ParamsOpcionalesComponent;
  let fixture: ComponentFixture<ParamsOpcionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamsOpcionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsOpcionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
