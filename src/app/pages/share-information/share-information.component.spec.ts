import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareInformationComponent } from './share-information.component';

describe('ShareInformationComponent', () => {
  let component: ShareInformationComponent;
  let fixture: ComponentFixture<ShareInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
