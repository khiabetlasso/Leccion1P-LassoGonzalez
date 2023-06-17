import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista1Component } from './vista1.component';

describe('LoginComponent', () => {
  let component: Vista1Component;
  let fixture: ComponentFixture<Vista1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vista1Component]
    });
    fixture = TestBed.createComponent(Vista1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
