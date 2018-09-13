import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrutamientoAnidadoComponent } from './enrutamiento-anidado.component';

describe('EnrutamientoAnidadoComponent', () => {
  let component: EnrutamientoAnidadoComponent;
  let fixture: ComponentFixture<EnrutamientoAnidadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrutamientoAnidadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrutamientoAnidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
