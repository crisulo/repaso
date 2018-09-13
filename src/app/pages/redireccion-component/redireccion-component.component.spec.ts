import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedireccionComponentComponent } from './redireccion-component.component';

describe('RedireccionComponentComponent', () => {
  let component: RedireccionComponentComponent;
  let fixture: ComponentFixture<RedireccionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedireccionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedireccionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
