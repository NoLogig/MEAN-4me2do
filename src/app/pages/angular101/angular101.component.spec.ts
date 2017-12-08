import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular101Component } from './angular101.component';

describe('Angular101Component', () => {
  let component: Angular101Component;
  let fixture: ComponentFixture<Angular101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
