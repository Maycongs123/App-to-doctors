import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroncodilatadoresCalculosComponent } from './broncodilatadores-calculos.component';

describe('BroncodilatadoresCalculosComponent', () => {
  let component: BroncodilatadoresCalculosComponent;
  let fixture: ComponentFixture<BroncodilatadoresCalculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BroncodilatadoresCalculosComponent]
    });
    fixture = TestBed.createComponent(BroncodilatadoresCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
