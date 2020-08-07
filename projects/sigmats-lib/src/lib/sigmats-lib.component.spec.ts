import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigmatsLibComponent } from './sigmats-lib.component';

describe('SigmatsLibComponent', () => {
  let component: SigmatsLibComponent;
  let fixture: ComponentFixture<SigmatsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigmatsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigmatsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
