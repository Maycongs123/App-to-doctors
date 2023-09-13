import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoRegraDos9Component } from './calculo-regra-dos9.component';

describe('CalculoRegraDos9Component', () => {
  let component: CalculoRegraDos9Component;
  let fixture: ComponentFixture<CalculoRegraDos9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculoRegraDos9Component]
    });
    fixture = TestBed.createComponent(CalculoRegraDos9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
